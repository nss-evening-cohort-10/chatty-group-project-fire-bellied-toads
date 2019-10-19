import $ from 'jquery';
import utilities from '../../helpers/utilities';
// import frogSong from '../../../assets/sounds/frog-ribbet.wav';

const printSound = () => {
  const domString = '<audio id="audio" src="./src/assets/sounds/frog-ribbet.wav" play="false"></audio>';
  utilities.printToDom('sound', domString);
};

const ribbet = () => {
  const frog = $('#audio');
  frog.trigger('play');
};

export default { ribbet, printSound };
