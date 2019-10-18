import './displayMsgs.scss';
import utilities from '../../helpers/utilities';

const displayMessages = (messages) => {
  let msgString = '';
  let counter = 0;
  messages.forEach((msg) => {
    msgString += `
    <div class='messageCard row d-flex'>
      <div class='msgDetails text-center col-2'>
        <p class='user'>${msg.name}</p>
        <p class='timeStamp'>${msg.timeStamp}</p>
      </div>
      <div class='msgBody col-8'>
        <p>${msg.message}</p>
      </div>
      <div class='modifyMsg row col-2'>
        <button type='button' id='del${counter}' class='col-4 delete offset-1'>X</button>
        <i id='edit${counter}' class='fas fa-pencil-alt edit col-4 offset-2'></i>
      </div>
    </div>
  `;
    counter += 1;
  });
  utilities.printToDom('msgDiv', msgString);
};

export default { displayMessages };
