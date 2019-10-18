import prinToDom from '';

const printNav = () => {
  let domString = '';
      domstring = `
      <nav class="navbar navbar-light bg-light fixed">
        <div class="col-2">
          <img src="#" alt="">
        </div>
        <div class="col-10">
        <form>
          <div class="form-group row">
            <input type="text" class="form-control col-10" id="message" placeholder="What's on your mind?">
            <button type="button" id="sendBtn" class="btn btn-dark col-2">SEND</button>
          </div>
          <div class="form-group row">
            <input type="text" class="form-control col-6" id="username" placeholder="Username">
            <div class="col-2"></div>
            <div class="form-group form-check col-1">
              <label class="form-check-label" for="darkMode"><i class="fas fa-cloud-moon"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" class="form-check-input" id="darkMode">
            </div>  
            <div class="form-group form-check col-1">
              <label class="form-check-label" for="textHeight"><i class="fas fa-text-height"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input type="checkbox" class="form-check-input" id="textHeight">
            </div>
            <button type="button" id="clearBtn" class="btn btn-outline-dark col-2">CLEAR</button>
          </div>
        </form>
        </div>  
      </nav>
      `;
//insert the printToDom
};

export default { printNav };
