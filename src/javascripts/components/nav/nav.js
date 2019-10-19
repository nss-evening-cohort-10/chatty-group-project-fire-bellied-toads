import utilities from '../../helpers/utilities';
import './nav.scss';

const printNav = () => {
  let domString = '';
  domString = `
      <nav class="navbar fixed-top row d-flex flex-wrap">
        <div id='logoDiv' class="col-2">
          <img id="navImg" src="/src/assets/images/toadtalk.png" alt="ToadTalk Logo">
        </div>
        <div id='formDiv' class="col-10">
        <form onsubmit='return false'>
          <div id='toggleSend' class="form-group row">
            <input type="text" class="form-control col-9" id="message" placeholder="What's on your mind?" required>
            <button type="submit" id="sendBtn" class="btn btn-dark col-2 offset-sm-1">SEND</button>
          </div>
          <div class="form-group row no-gutters">
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
};

export default { printNav };
