import $ from 'jquery';
import messageData from '../../helpers/data/messageData';
import display from '../displayMsgs/displayMsgs';

const restoreForm = () => {
  $('#username').show().prop('required', true);
  $('#message').val('');
};

const editMsg = (e) => {
  const messageArr = messageData.getMessage();
  const itemToEdit = $(e.target).closest('button').attr('id');
  const splitId = itemToEdit.split('t');
  const editSeq = parseInt(splitId[1], 0);
  const toEdit = messageArr[editSeq].message;
  $('#message').val(toEdit);
  $('#sendBtn').html('Update').attr('id', 'updateBtn');
  $('#username').hide().prop('required', false);
  $('#updateBtn').click(() => {
    messageArr[editSeq].message = $('#message').val();
    display.displayMessages(messageArr);
    $('#updateBtn').html('Send').attr('id', 'sendBtn');
    setTimeout(restoreForm, 50);
  });
};

const editMsgEvent = () => {
  $('body').on('click', '.edit', editMsg);
};

export default { editMsgEvent };
