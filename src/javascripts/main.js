import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import add from './components/addMsg/addMsg';
import nav from './components/nav/nav';
import clear from './components/clearMsgs/clearMsgs';
import data from './helpers/data/messageData';
import display from './components/displayMsgs/displayMsgs';
import deleteMsg from './components/deleteMsgs/deleteMsg';

const msgArray = data.getMessage();

const init = () => {
  nav.printNav();
  display.displayMessages(msgArray);
  add.addMsgEvent();
  deleteMsg.deleteMessage();
  clear.addClearEvent();
};

init();
