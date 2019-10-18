import $ from 'jquery';
import messageData from '../../helpers/data/messageData';
import displayMsgs from '../displayMsgs/displayMsgs';

const deleteMessage = () => {
  $('body').on('click', '.delete', (e) => {
    const messageArray = messageData.getMessage();
    const itemToDelete = e.target.id;
    const idSplit = itemToDelete.split('l');
    const messageLocation = parseInt(idSplit[1], 0);
    messageArray.splice(messageLocation, 1);
    displayMsgs.displayMessages(messageArray);
  });
};

export default { deleteMessage };
