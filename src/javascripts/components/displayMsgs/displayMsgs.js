import './displayMsgs.scss';
import utilities from '../../helpers/utilities';

const makeMessage = (msg, counter) => {
  const msgString = `
    <div class='messageCard row d-flex'>
      <div class='msgDetails text-center col-sm-2 col-4'>
        <p class='user m-sm-4'>${msg[counter].name}</p>
        <p class='timeStamp'>${msg[counter].timeStamp}</p>
      </div>
      <div class='msgBody col-sm-8 col-6'>
        <p>${msg[counter].message}</p>
      </div>
      <div class='modifyMsg row col-2'>
        <button type='button' id='del${counter}' class='col-md-4 delete offset-md-1'>X</button>
        <button type='button' class='edit col-md-4 offset-md-2'><i id='edit${counter}' class='fas fa-pencil-alt edit'></i></button>
      </div>
    </div>
  `;
  return msgString;
};

const displayMessages = (messages) => {
  let msgString = '';
  if (messages.length <= 20) {
    for (let i = 0; i < messages.length; i += 1) {
      msgString += makeMessage(messages, i);
    }
  } else {
    for (let i = 0; i < 20; i += 1) {
      msgString += makeMessage(messages, i);
    }
  }
  utilities.printToDom('msgDiv', msgString);
};

export default { displayMessages };
