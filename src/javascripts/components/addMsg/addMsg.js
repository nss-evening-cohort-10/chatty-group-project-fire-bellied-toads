import $ from 'jquery';
import moment from 'moment';
import displayMsgs from '../displayMsgs/displayMsgs';
import gif from '../addGifs/gifSelector';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';
import ribbet from '../ribbet/ribbet';

const clearForm = () => {
  $('#username').val('');
  $('#message').val('').prop('required', true);
  $('#gifBtn').show();
  $('#gifAttached').hide();
  gif.clearGif();
};

const addMessage = (e) => {
  if (e.which === 13 || e.target.id === 'sendBtn') {
    if (($('#username').val() !== '' && $('#message').val() !== '') || ($('#username').val() !== '' && gif.getGif() !== '')) {
      const newMsgObj = {};
      newMsgObj.name = $('#username').val();
      newMsgObj.message = $('#message').val();
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
