import './darkMode.scss';
import $ from 'jquery';

const makeDark = () => {
  $('body').on('click', '#darkMode', () => {
    if ($('#darkMode').is(':checked')) {
      $('body').attr('data-theme', 'dark');
      $('#clearBtn').addClass('btn-outline-light');
      $('#clearBtn').removeClass('btn-outline-dark');
      $('#navImg2').show();
      $('#navImg').hide();
      if ($('#pinkTheme').is(':checked')) {
        $('#pinkTheme').prop('checked', false);
      } else if ($('#swampTheme').is(':checked')) {
        $('#swampTheme').prop('checked', false);
      } else if ($('#defaultTheme').is(':checked')) {
        $('#defaultTheme').prop('checked', false);
      }
    } else {
      $('body').attr('data-theme', 'light');
      $('#clearBtn').addClass('btn-outline-dark');
      $('#clearBtn').removeClass('btn-outline-light');
      $('#navImg').show();
      $('#navImg2').hide();
    }
  });
};

export default { makeDark };
