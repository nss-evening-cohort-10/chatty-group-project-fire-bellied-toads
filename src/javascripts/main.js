import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import display from './components/displayMsgs/displayMsgs';

const testMsg = display.getMsg();

const init = () => {
  display.displayMessages(testMsg);
};

init();
