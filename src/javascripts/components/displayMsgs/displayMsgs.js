import './displayMsgs.scss';
import utilities from '../../helpers/utilities';

const displayMessages = (messages) => {
  let msgString = '';
  let counter = 0;
  messages.forEach((msg) => {
    msgString += `
    <div class='messageCard row d-flex'>
      <div class='msgDetails text-center col-sm-2 col-4'>
        <p class='user m-sm-4'>${msg.name}</p>
        <p class='timeStamp'>${msg.timeStamp}</p>
      </div>
      <div class='msgBody col-sm-8 col-6'>
        <p>${msg.message}</p>
      </div>
      <div class='modifyMsg row col-2'>
        <button type='button' id='del${counter}' class='col-md-4 delete offset-md-1'>X</button>
        <button type='button' class='edit col-md-4 offset-md-2'><i id='edit${counter}' class='fas fa-pencil-alt edit'></i></button>
      </div>
    </div>
  `;
    counter += 1;
  });
  utilities.printToDom('msgDiv', msgString);
};

export default { displayMessages };
