import './darkMode.scss';
import $ from 'jquery';

const makeDark = () => {
  $('body').on('click', '#darkMode', () => {
    if ($('#darkMode').is(':checked')) {
      $('body').attr('data-theme', 'dark');
      $('#clearBtn').addClass('btn-outline-light');
      $('#clearBtn').removeClass('btn-outline-dark');
    } else {
      $('body').attr('data-theme', 'light');
      $('#clearBtn').addClass('btn-outline-dark');
      $('#clearBtn').removeClass('btn-outline-light');
    }
  });
};

export default { makeDark };
