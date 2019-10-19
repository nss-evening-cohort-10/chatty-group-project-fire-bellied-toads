import moment from 'moment';

const messageArr = [
  {
    name: 'Joe',
    message: `replace with seed data this is a very long message this is a very long message this is a very long message this is a very long 
    message this is a very long message this is a very long message this is a very long message this is a very long message this is a very long 
    message this is a very long message this is a very long message this is a very long message this is a very long message this is a very long 
    message this is a very long message this is a very long message this is a very long message this is a very long message this is a very long 
    message this is a very long message this is a very long message this is a very long message this is a very long message `,
    timeStamp: moment().format('llll'),
  },
  {
    name: 'Jane',
    message: 'replace with seed data',
    timeStamp: moment().format('llll'),
  },
  {
    name: 'Jose',
    message: 'replace with seed data',
    timeStamp: moment().format('llll'),
  },
];

const getMessage = () => messageArr;

export default { getMessage };
