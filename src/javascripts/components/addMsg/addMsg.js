import $ from 'jquery';
import moment from 'moment';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';
import ribbet from '../ribbet/ribbet';

const clearForm = () => {
  $('#username').val('');
  $('#message').val('');
};

const addMessage = (e) => {
  if (e.which === 13 || e.target.id === 'sendBtn') {
    if ($('#username').val() !== '' && $('#message').val() !== '') {
      const newMsgObj = {};
      newMsgObj.name = $('#username').val();
      newMsgObj.message = $('#message').val();
      newMsgObj.timeStamp = moment().format('llll');
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
