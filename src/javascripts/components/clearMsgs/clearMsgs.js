import $ from 'jquery';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';

const clearMessages = (e) => {
  if (e.target.id === 'clearBtn') {
    const newArr = messageData.getMessage();
    newArr.splice(0, newArr.length);
    displayMsgs.displayMessages(newArr);
  }
};

const addClearEvent = () => {
  $('body').click(clearMessages);
};

export default { addClearEvent };
