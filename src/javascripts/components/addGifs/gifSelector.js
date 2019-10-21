import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './gifSelector.scss';

const giphyIds = ['ZVik7pBtu9dNS', 'ZG719ozZxGuThHBckn', 'QHE5gWI0QjqF2', 'Xj3EJNeQHFQ5i', '3oKIPnAiaMCws8nOsE', 'zOvBKUUEERdNm', '13UZisxBxkjPwI', 'nGMnDqebzDcfm', 'ZFbvG2eF923te', '5ntdy5Ban1dIY'];
let giphyCode = '';
let gifOutput = '';

const getGif = () => gifOutput;

const printGif = (gifCode) => {
  $('#selectGifBtn').hide();
  $('#gifSearchResults').html('');
  $('#giphyModal').modal('hide');
  $('#gifBtn').hide();
  $('#gifAttached').show();
  gifOutput = `
  <iframe src="https://giphy.com/embed/${gifCode}" width="100%" height="100%" frameBorder="0" allowFullScreen></iframe>
  `;
  return gifOutput;
};

const selectGif = (e) => {
  giphyCode = e.target.id;
  $('.gifOptions').css('border', 'none');
  $(`#${giphyCode}`).css('border', '5px solid red');
  $('#selectGifBtn').show();
  return giphyCode;
};

const searchGifs = () => {
  let gifString = '';
  for (let i = 0; i < 10; i += 1) {
    gifString += `
      <img class='cardImg gifOptions m-1' id='${giphyIds[i]}' src='https://media.giphy.com/media/${giphyIds[i]}/giphy.gif' />
    `;
  }
  utilities.printToDom('gifSearchResults', gifString);
  setTimeout(() => $('#gifSearchTerm').val(''), 50);
};

const printModal = () => {
  const modalString = `
    <div class="modal fade" id="giphyModal" tabindex="-1" role="dialog" aria-labelledby="giphyModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="giphyModalTitle">Find a Gif <span>powered by Giphy</span></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
          <div id='gifSearchBar'>
            <form id='gifSearchForm' onsubmit='return false'>
              <div class="input-group mb-3 row no-gutters">
                <input type="text" class="form-control col-7" id="gifSearchTerm" placeholder=" Search..." required>
                <div class="input-group-append col-3">
                    <button type="submit" id='gifSearchBtn' class="btn btn-warning">Search</button>
                </div>
            </form>
          </div>
          <div id='gifSearchResults' class='row d-flex flex-wrap'></div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" id="selectGifBtn" class="btn btn-success">Choose</button>
        </div>
        </div>
    </div>
    </div>
  `;
  utilities.printToDom('gifModal', modalString);
  $('body').on('click', '#gifSearchBtn', searchGifs);
  $('body').on('click', '.gifOptions', selectGif);
  $('body').on('click', '#selectGifBtn', () => {
    printGif(giphyCode);
  });
};

export default { printModal, getGif };
