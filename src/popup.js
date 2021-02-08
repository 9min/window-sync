import { APP, TYPE_LOAD, TYPE_CLOSE, TYPE_MESSAGE } from '@/const';
import { addEvent, noop, delay } from '@/utils';

class Popup {
  constructor(props) {
    this.props = props;
    this.popup = null;

    this.validator();
    this.init();
    this.initEvents();
  }

  validator() {
    const { key } = this.props;

    if (!key) throw Error("'key' is not defined!");
  }

  init() {
    const { key, origin = window.location.origin } = this.props;

    this.popup = {
      key,
      origin,
      isReady: false,
      timer: null,
      receiveCallback: null,
      wrapper: {
        onReceive: (callback) => {
          return this.onReceive(callback);
        },
        send: (payload) => {
          return this.send({ type: TYPE_MESSAGE, payload });
        },
        close: () => {
          this.close();
        },
      },
    };
  }

  initEvents() {
    addEvent('message', (event) => this.onMessage(event));
    addEvent('beforeunload', (event) => this.onBeforeunload(event));
  }

  getWrapper() {
    return this.popup.wrapper;
  }

  onMessage(event) {
    const { data = {} } = event;
    const isDifferentToken = data.token !== this.popup.key;

    if (data.app !== APP || isDifferentToken) {
      return;
    }

    if (!this.popup.key) {
      console.error(`'${this.popup.key}' popup key do not match!`);
      return;
    }

    this.popup.receiveCallback(data.payload);
  }

  onReceive(callback = noop) {
    if (this.popup.isReady) {
      return;
    }

    this.popup.receiveCallback = callback;
    this.popup.isReady = true;
    this.popup.timer = delay(() => {
      this.send({ type: TYPE_LOAD });
    });
  }

  onBeforeunload() {
    this.close();
  }

  send(message) {
    window.opener.postMessage({ app: APP, token: this.popup.key, message });
  }

  close() {
    this.send({ type: TYPE_CLOSE });
    window.close();
  }
}

export default Popup;
