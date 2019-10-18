import $ from 'jquery';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';

import './addMsg.scss';

const addMessage = (e) => {
  if (e.which === 13) {
    // console.log(e);
    const newMsgObj = {};
    newMsgObj.name = $('#username').val();
    newMsgObj.message = $('#message').val();
    newMsgObj.timeStamp = e.timestamp;
    const newArr = messageData.getMessage();
    newArr.unshift(newMsgObj);
    console.log(newArr);
    displayMsgs.displayMessages(newArr);
  }
};

const addMsgEvent = () => {
  $('body').keypress(addMessage);
  console.log('work!');
};

export default { addMsgEvent };
