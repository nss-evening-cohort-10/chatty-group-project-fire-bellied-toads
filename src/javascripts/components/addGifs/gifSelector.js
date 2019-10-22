import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './gifSelector.scss';

let giphyIds = [];
let giphyCode = '';
let gifOutput = '';

const getGif = () => gifOutput;

const clearGif = () => {
  gifOutput = '';
  return gifOutput;
};

const sortData = (giphy) => {
  for (let n = 0; n < 10; n += 1) {
    giphyIds.push(giphy.data[n].id);
  }
};

const searchGiphy = () => {
  const searchTerm = $('#gifSearchTerm').val().replace(' ', '+');
  console.log(searchTerm);
  const url = `
    http://api.giphy.com/v1/gifs/search?&api_key=YdazyFlfiiIEP6hKfrZQMtgytf2CMG9A&q=${searchTerm}
  `;
  $.getJSON(url, sortData);
};

const printGif = (gifCode) => {
  $('#selectGifBtn').hide();
  $('#gifSearchResults').html('');
  $('#giphyModal').modal('hide');
  $('#gifBtn').hide();
  $('#gifAttached').show();
  $('#message').prop('required', false);
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
  if ($('#gifSearchTerm').val() !== '') {
    giphyIds = [];
    searchGiphy();
    console.log(giphyIds);
    let gifString = '';
    for (let i = 0; i < 10; i += 1) {
      gifString += `
      <img class='cardImg gifOptions m-1' id='${giphyIds[i]}' src='https://media.giphy.com/media/${giphyIds[i]}/giphy.gif' />
      `;
    }
    utilities.printToDom('gifSearchResults', gifString);
    setTimeout(() => $('#gifSearchTerm').val(''), 50);
  }
};

const printModal = () => {
  const modalString = `
    <div class="modal fade" id="giphyModal" tabindex="-1" role="dialog" aria-labelledby="giphyModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
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

export default { printModal, getGif, clearGif };
