import { APP, TYPE_LOAD, TYPE_CLOSE } from '@/const';
import { addEvent, dispatchEvent, noop } from '@/utils';

class Opener {
  constructor(props) {
    this.defaultOptions = {
      top: 0,
      left: 0,
      width: 400,
      height: 400,
      autoFocus: false,
    };
    this.props = props;
    this.opener = {};

    this.validator();
    this.init();
    this.initEvents();
  }

  validator() {
    const { key, url } = this.props;

    if (!key) throw Error("'key' is not defined!");
    if (!url) throw Error("'url' is not defined!");
  }

  init() {
    const { key, url, options = this.defaultOptions } = this.props;
    const that = this;

    this.opener[key] = {
      key,
      url,
      options,
      popup: null,
      timer: null,
      state: {
        isLoading: false,
        isOpen: false,
      },
      events: {
        load: (detail) => new CustomEvent(`popupLoad-${key}`, { detail }),
        close: (detail) => new CustomEvent(`popupClose-${key}`, { detail }),
        receive: (detail) => new CustomEvent(`popupReceive-${key}`, { detail }),
      },
      listener: {
        onLoad: noop,
        onReceive: noop,
        onClose: noop,
      },
      wrapper: {
        open() {
          return that.open(key);
        },
        send(message) {
          return that.send(key, message);
        },
        close() {
          return that.close(key);
        },
        onReceive(callback) {
          return that.onReceive(key, callback);
        },
        onClose(callback) {
          return that.onClose(key, callback);
        },
      },
    };
  }

  initEvents() {
    addEvent('message', (event) => this.onMessage(event));
    addEvent('beforeunload', (event) => this.onBeforeunload(event));
  }

  getWrapper(key) {
    return this.opener[key].wrapper;
  }

  onMessage(event) {
    const { data = {} } = event;
    const { app, token: key, message = {} } = data;

    if (app !== APP || !this.opener[key]) {
      return;
    }

    const { type } = message;
    const currentOpener = this.opener[key];

    if (type == TYPE_LOAD) {
      dispatchEvent(currentOpener.events.load());
      return;
    }

    if (type == TYPE_CLOSE) {
      if (currentOpener.isForceClosePopup) {
        currentOpener.isForceClosePopup = false;
      } else {
        this.resetPopup(key);
      }
      dispatchEvent(currentOpener.events.close({ key }));
      return;
    }

    dispatchEvent(currentOpener.events.receive({ key, message }));
  }

  onReceive(key, callback) {
    const currentOpener = this.opener[key];

    currentOpener.listener.onReceive = ({ detail: { message } }) => callback(message.payload);

    addEvent(`popupReceive-${key}`, currentOpener.listener.onReceive);
  }

  onClose(key, callback) {
    const currentOpener = this.opener[key];

    currentOpener.listener.onClose = () => callback(key);

    addEvent(`popupClose-${key}`, currentOpener.listener.onClose);
  }

  onBeforeunload() {
    Object.keys(this.opener).forEach((key) => this.close(key));
  }

  open(key) {
    return new Promise((resolve, reject) => {
      try {
        const currentOpener = this.opener[key];
        const { isLoading, isOpen } = currentOpener.state;
        const { top, left, width, height } = currentOpener.options;

        if (isLoading || isOpen) {
          if (currentOpener.options.autoFocus) {
            currentOpener.popup.focus();
          }
          return;
        }

        currentOpener.state.isLoading = true;
        currentOpener.state.isOpen = true;
        currentOpener.popup = window.open(
          currentOpener.url,
          key,
          `top=${top},left=${left},width=${width},height=${height}
        ,personalbar=0,toolbar=0,scrollbars=0,resizable=0`
        );

        currentOpener.listener.onLoad = () => {
          currentOpener.state.isLoading = false;
          resolve(key);
        };

        addEvent(`popupLoad-${key}`, currentOpener.listener.onLoad);
      } catch (error) {
        reject(error);
      }
    });
  }

  async send(key, payload) {
    const currentOpener = this.opener[key];
    const postData = { app: APP, token: key, payload };

    if (!currentOpener.state.isOpen) {
      await this.open(key);
    }

    if (currentOpener.state.isLoading) {
      clearTimeout(currentOpener.timer);
      currentOpener.timer = window.setTimeout(() => this.send(key, payload), 100);
      return;
    }

    currentOpener.popup.postMessage(postData);

    if (currentOpener.options.autoFocus) {
      currentOpener.popup.focus();
    }
  }

  resetPopup(key) {
    const currentOpener = this.opener[key];

    currentOpener.popup = null;
    currentOpener.state.isOpen = false;
  }

  close(key) {
    const currentOpener = this.opener[key];
    const { isOpen, isLoading } = currentOpener.state;

    if (!isOpen || isLoading) {
      return;
    }

    currentOpener.isForceClosePopup = true;
    currentOpener.popup.close();

    this.resetPopup(key);
  }
}

export default Opener;
