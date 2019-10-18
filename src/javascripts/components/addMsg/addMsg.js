import $ from 'jquery';
// import displayMsgs from '../displayMsgs/displayMsgs';
// import messageData from '../../helpers/data/messageData';

import './addMsg.scss';

const addMessage = (e) => {
  if (e.which === 13) {
    console.log(e);
    console.log('work!');
  }
  /* const newMsgObj = {};
  newMsgObj.name = $('#username').val();
  newMsgObj.message = $('#message').val();
  newMsgObj.timeStamp = e.timestamp;
  messageData.getMessage.push(newMsgObj);
  displayMsgs.displayMessages(messageData.getMessage); */
};

const addMsgEvent = () => {
  $('#message').keypress(addMessage);
  console.log('work!');
};

export default { addMsgEvent };
