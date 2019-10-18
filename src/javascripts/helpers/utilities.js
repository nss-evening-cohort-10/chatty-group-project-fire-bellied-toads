import $ from 'jquery';

const printToDom = (divId, textToPrint) => {
  $(`#${divId}`).html(textToPrint);
};

const toggleClearButton = (arr) => {
  if (arr.length === 0) {
    $('#clearBtn').prop('disabled', true);
  } else {
    $('#clearBtn').prop('disabled', false);
  }
};

export default { printToDom, toggleClearButton };
