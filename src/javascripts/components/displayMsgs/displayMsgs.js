import './displayMsgs.scss';
import utilities from '../../helpers/utilities';

const msgArr = [
  {
    name: 'Joe',
    message: 'replace with seed data',
    timeStamp: '16 Oct 2019',
  },
  {
    name: 'Jane',
    message: 'replace with seed data',
    timeStamp: '16 Oct 2019',
  },
  {
    name: 'Jose',
    message: 'replace with seed data',
    timeStamp: '16 Oct 2019',
  },
];

const getMsg = () => msgArr;

const displayMessages = (messages) => {
  let msgString = '';
  let counter = 0;
  messages.forEach((msg) => {
    msgString += `
    <div class='messageCard row d-flex'>
      <div class='msgDetails col-2'>
        <p class='user'>${msg.name}</p>
        <p class='timeStamp'>${msg.timeStamp}</p>
      </div>
      <div class='msgBody col-8'>
        <p>${msg.message}</p>
      </div>
      <div class='modifyMsg row col-2'>
        <button type='button' id='delete${counter}' class='col-4 offset-1'>X</button>
        <i id='edit${counter}' class='fas fa-pencil-alt col-4 offset-2'></i>
      </div>
    </div>
  `;
    counter += 1;
  });
  utilities.printToDom('msgDiv', msgString);
};

export default { displayMessages, getMsg };
