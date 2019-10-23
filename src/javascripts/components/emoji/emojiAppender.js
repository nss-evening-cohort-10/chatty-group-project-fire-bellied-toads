import e from '../../helpers/data/emoji';

const emojis = e.getEmojis();

const findEmoji = (msg) => {
  const regex = /:\S+:/g;
  const myEmoji = msg.match(regex);
  if (myEmoji) {
    let newString = msg;
    myEmoji.forEach((emoji) => {
      const selectedEmoji = emojis.find((x) => x.code === emoji);
      newString = newString.replace(selectedEmoji.code, selectedEmoji.emoji);
    });
    return newString;
  }
  return msg;
};

export default { findEmoji };
