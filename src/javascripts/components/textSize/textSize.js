import './textSize.scss';
import $ from 'jquery';

const enlarge = () => {
  if ($('#textSize').is(':checked')) {
    $('p').addClass('enlarge');
  } else {
    $('p').removeClass('enlarge');
  }
};

const makeBig = () => {
  $('body').on('click', '#textSize', () => {
    enlarge();
  });
};


export default { makeBig, enlarge };
