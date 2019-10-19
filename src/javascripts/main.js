import 'bootstrap';
import '@fortawesome/fontawesome-free/js/all';
import '../styles/main.scss';
import add from './components/addMsg/addMsg';
import edit from './components/editMsg/editMsg';
import nav from './components/nav/nav';
import clear from './components/clearMsgs/clearMsgs';
import data from './helpers/data/messageData';
import display from './components/displayMsgs/displayMsgs';
import deleteMsg from './components/deleteMsgs/deleteMsg';
import darkMode from './components/darkMode/darkMode';
import textSize from './components/textSize/textSize';
import ribbet from './components/ribbet/ribbet';

const msgArray = data.getMessage();

const init = () => {
  nav.printNav();
  display.displayMessages(msgArray);
  add.addMsgEvent();
  edit.editMsgEvent();
  deleteMsg.deleteMessage();
  clear.addClearEvent();
  darkMode.makeDark();
  textSize.makeBig();
  ribbet.printSound();
};

init();
