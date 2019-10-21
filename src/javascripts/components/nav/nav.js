import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './nav.scss';

const printNav = () => {
  let domString = '';
  domString = `
      <nav class="navbar fixed-top row d-flex flex-wrap">
        <div id='logoDiv' class="col-2">
          <img id="navImg" src="/src/assets/images/toadtalk.png" alt="ToadTalk Logo">
          <img id="navImg2" src="/src/assets/images/toadTalkDarkMode.png" alt="ToadTalk Logo">
        </div>
        <div id='formDiv' class="col-10">
        <form onsubmit='return false'>
          <div id='toggleSend' class="form-group row">
            <div class="input-group mb-3">
              <input type="text" class="form-control col-7" id="message" placeholder="What's on your mind?" required>
              <div id='gifBtnDiv' class="input-group-append col-lg-2 col-3">
                <button type="button" id='gifBtn' class="btn btn-outline-secondary" data-toggle="modal" data-target="#giphyModal">Search Gifs</button>
                <button type="button" id='gifAttached' class="btn btn-success">Gif Attached</button>
              </div>
            </div>
            <button type="submit" id="sendBtn" class="btn btn-dark col-2">SEND</button>
          </div>
          <div id='formRow2' class="form-group row no-gutters">
            <input type="text" class="form-control col-6" id="username" placeholder="Username" required>
            <div id='switchDiv' class='row d-flex flex-wrap col-3 offset-1'>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="darkMode">
                <label class="custom-control-label" for="darkMode"><i class="fas fa-cloud-moon icon" alt="dark mode"></i></label>
              </div>
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" id="textSize">
                <label class="custom-control-label" for="textSize"><i class="fas fa-text-height icon" alt="enlarge text"></i></label>
              </div>
            </div>
            <button type="button" id="clearBtn" class="btn btn-outline-dark col-2">CLEAR</button>
          </div>
        </form>
        </div>  
      </nav>
      `;
  utilities.printToDom('messageBar', domString);
  $('#navImg2').hide();
};

const logoSwap = () => {
  if ($(window).innerWidth() < 800 && $(window).innerWidth() > 414) {
    $('#navImg').attr('src', '/src/assets/images/toadTalkStacked.png');
    $('#navImg2').attr('src', '/src/assets/images/toadTalkStackedDarkMode.png');
  } else if ($(window).innerWidth() >= 800 || $(window).innerWidth() <= 414) {
    $('#navImg').attr('src', '/src/assets/images/toadtalk.png');
    $('#navImg2').attr('src', '/src/assets/images/toadTalkDarkMode.png');
  }
};

const logoSwapEvent = () => {
  $(document).ready(logoSwap);
  $(window).resize(logoSwap);
};

export default { printNav, logoSwapEvent };
