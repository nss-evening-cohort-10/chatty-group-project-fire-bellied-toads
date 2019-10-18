import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import data from './helpers/data/messageData';
import display from './components/displayMsgs/displayMsgs';

const msgArray = data.getMessage();

const init = () => {
  display.displayMessages(msgArray);
};

init();
