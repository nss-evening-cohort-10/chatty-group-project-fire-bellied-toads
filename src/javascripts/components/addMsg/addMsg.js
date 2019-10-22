import $ from 'jquery';
import moment from 'moment';
import displayMsgs from '../displayMsgs/displayMsgs';
import gif from '../addGifs/gifSelector';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';
import emojis from '../emoji/emojiAppender';
import ribbet from '../ribbet/ribbet';

const clearForm = () => {
  $('#username').val('');
  $('#message').val('').prop('required', true);
  $('#gifBtn').show();
  $('#gifAttached').hide();
  gif.clearGif();
};

const addMessage = (e) => {
  const message = $('#message').val();
  const username = $('#username').val();
  if (e.which === 13 || e.target.id === 'sendBtn') {
    if ((username !== '' && message !== '') || (username !== '' && gif.getGif() !== '')) {
      const newMsgObj = {};
      newMsgObj.name = username;
      newMsgObj.message = emojis.findEmoji(message);
      newMsgObj.timeStamp = moment().format('llll');
      newMsgObj.gif = gif.getGif();
      const newArr = messageData.getMessage();
      newArr.unshift(newMsgObj);
      utilities.toggleClearButton(newArr);
      displayMsgs.displayMessages(newArr);
      setTimeout(clearForm, 100);
      ribbet.ribbet();
    }
  }
};

const addMsgEvent = () => {
  $('body').click(addMessage);
};

export default { addMsgEvent };
