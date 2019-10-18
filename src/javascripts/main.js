import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import nav from './components/nav/nav';
import data from './helpers/data/messageData';
import display from './components/displayMsgs/displayMsgs';
import deleteMsg from './components/deleteMsgs/deleteMsg';

const msgArray = data.getMessage();

const init = () => {
  nav.printNav();
  display.displayMessages(msgArray);
  deleteMsg.deleteMessage();
};

init();
