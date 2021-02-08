import Opener from './opener';
import Popup from './popup';

const windowSync = {
  opener: (props) => {
    const newOpener = new Opener(props);
    return newOpener.getWrapper(props.key);
  },
  popup: (props) => {
    const newPopup = new Popup(props);
    return newPopup.getWrapper();
  },
};

window.windowSync = windowSync;

export default windowSync;
