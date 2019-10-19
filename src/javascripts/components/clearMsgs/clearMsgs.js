import $ from 'jquery';
import displayMsgs from '../displayMsgs/displayMsgs';
import messageData from '../../helpers/data/messageData';
import utilities from '../../helpers/utilities';

const clearMessages = (e) => {
  if (e.target.id === 'clearBtn') {
    const newArr = messageData.getMessage();
    newArr.splice(0, newArr.length);
    utilities.toggleClearButton(newArr);
    displayMsgs.displayMessages(newArr);
  }
};

const addClearEvent = () => {
  $('body').on('click', '#clearBtn', clearMessages);
};

export default { addClearEvent };
