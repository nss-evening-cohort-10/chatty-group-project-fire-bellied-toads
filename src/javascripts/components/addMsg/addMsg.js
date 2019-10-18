import $ from 'jquery';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

import './addMsg.scss';

const addMessage = (e) => {
  if (e.which === 13 || e.target.id === 'sendBtn') {
    const newMsgObj = {};
    newMsgObj.name = $('#username').val();
    newMsgObj.message = $('#message').val();
    newMsgObj.timeStamp = $.now();
    const newArr = messageData.getMessage();
    newArr.unshift(newMsgObj);
    utilities.toggleClearButton(newArr);
    displayMsgs.displayMessages(newArr);
  }
};

const addMsgEvent = () => {
  $('body').keypress(addMessage);
  $('body').click(addMessage);
};

export default { addMsgEvent };
