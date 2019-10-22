import $ from 'jquery';
import './themes.scss';
import utilities from '../../helpers/utilities';

const printThemeOptions = () => {
  let domString = `
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="defaultTheme" name="themes" class="custom-control-input">
    <label class="custom-control-label" for="defaultTheme">Default</label>
  </div>
  `;
  domString += `
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="pinkTheme" name="themes" class="custom-control-input">
      <label class="custom-control-label" for="pinkTheme">Rose Garden</label>
    </div>
    `;
  domString += `
    <div class="custom-control custom-radio custom-control-inline">
      <input type="radio" id="swampTheme" name="themes" class="custom-control-input">
      <label class="custom-control-label" for="swampTheme">Swampy</label>
    </div>`;
  utilities.printToDom('themePicker', domString);
};

const swapTheme = () => {
  $('input[type="radio"]').on('click', () => {
    if ($('#pinkTheme').is(':checked')) {
      $('body').attr('data-theme', 'pink');
      if ($('#darkMode').is(':checked')) {
        $('#darkMode').prop('checked', false);
      }
      $('#navImg').show();
      $('#navImg2').hide();
    } else if ($('#swampTheme').is(':checked')) {
      $('body').attr('data-theme', 'swamp');
      if ($('#darkMode').is(':checked')) {
        $('#darkMode').prop('checked', false);
      }
      $('#navImg').show();
      $('#navImg2').hide();
    } else if ($('#defaultTheme').is(':checked')) {
      $('body').attr('data-theme', 'light');
      $('#clearBtn').addClass('btn-outline-dark');
      $('#clearBtn').removeClass('btn-outline-light');
      if ($('#darkMode').is(':checked')) {
        $('#darkMode').prop('checked', false);
      }
      $('#navImg').show();
      $('#navImg2').hide();
    }
  });
};

export default { printThemeOptions, swapTheme };
