import $ from 'jquery';
import moment from 'moment';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';
import emojis from '../emoji/emojiAppender';
import './addMsg.scss';

const clearForm = () => {
  $('#username').val('');
  $('#message').val('');
};

const addMessage = (e) => {
  const message = $('#message').val();
  const username = $('#username').val();
  if (e.which === 13 || e.target.id === 'sendBtn') {
    if (username !== '' && message !== '') {
      const newMsgObj = {};
      newMsgObj.name = username;
      newMsgObj.message = emojis.findEmoji(message);
      newMsgObj.timeStamp = moment().format('llll');
      const newArr = messageData.getMessage();
      newArr.unshift(newMsgObj);
      utilities.toggleClearButton(newArr);
      displayMsgs.displayMessages(newArr);
      setTimeout(clearForm, 100);
    }
  }
};

const addMsgEvent = () => {
  $('body').click(addMessage);
};

export default { addMsgEvent };
