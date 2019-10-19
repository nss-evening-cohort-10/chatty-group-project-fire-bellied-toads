import './textSize.scss';
import $ from 'jquery';

const makeBig = () => {
  $('body').on('click', '#textSize', () => {
    if ($('#textSize').is(':checked')) {
      $('p').addClass('enlarge');
      console.log('big');
    } else {
      $('p').removeClass('enlarge');
      console.log('little');
    }
  });
};

export default { makeBig };
