import utilities from '../../helpers/utilities';
import './nav.scss';

const printNav = () => {
  let domString = '';
  domString = `
      <nav class="navbar fixed-top">
        <div class="col-2">
          <img id="navImg" src="/src/assets/images/toadtalk.png" alt="ToadTalk Logo">
        </div>
        <div class="col-10">
        <form onsubmit='return false'>
          <div id='toggleSend' class="form-group row">
            <input type="text" class="form-control col-10" id="message" placeholder="What's on your mind?" required>
            <button type="submit" id="sendBtn" class="btn btn-dark col-2">SEND</button>
          </div>
          <div class="form-group row">
            <input type="text" class="form-control col-6" id="username" placeholder="Username" required>
            <div class="col-1"></div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="darkMode">
              <label class="custom-control-label" for="darkMode"><i class="fas fa-cloud-moon icon" alt="dark mode"></i></label>
            </div>
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="textSize">
              <label class="custom-control-label" for="textSize"><i class="fas fa-text-height icon" alt="enlarge text"></i></label>
            </div>
            <button type="button" id="clearBtn" class="btn btn-outline-dark col-2">CLEAR</button>
          </div>
        </form>
        </div>  
      </nav>
      `;
  utilities.printToDom('messageBar', domString);
};

export default { printNav };
