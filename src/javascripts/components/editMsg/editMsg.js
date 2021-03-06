import $ from 'jquery';
import messageData from '../../helpers/data/messageData';
import display from '../displayMsgs/displayMsgs';
import ribbet from '../ribbet/ribbet';

const restoreForm = () => {
  $('#username').show().prop('required', true);
  $('#gifBtn').show();
  $('#message').val('');
  $('#updateBtn').remove();
  $('#toggleSend').append('<button type="submit" id="sendBtn" class="btn btn-dark col-2">SEND</button>');
};

const updateMsg = (seq) => {
  ribbet.ribbet();
  const messageArr = messageData.getMessage();
  messageArr[seq].message = $('#message').val();
  display.displayMessages(messageArr);
  $('.edit').show();
  setTimeout(() => {
    restoreForm();
  }, 50);
};

const editMsg = (e) => {
  const messageArr = messageData.getMessage();
  const itemToEdit = $(e.target).closest('button').attr('id');
  const splitId = itemToEdit.split('t');
  const editSeq = parseInt(splitId[1], 0);
  const toEdit = messageArr[editSeq].message;
  $('#message').val(toEdit);
  $('#sendBtn').remove();
  $('#username').hide().prop('required', false);
  $('#gifBtn').hide();
  $('#toggleSend').append('<button type="submit" id="updateBtn" class="btn btn-dark col-2">Update</button>');
  $('.edit').hide();
  $('#updateBtn').click(() => updateMsg(editSeq));
};

const editMsgEvent = () => {
  $('body').on('click', '.edit', editMsg);
};

export default { editMsgEvent };
