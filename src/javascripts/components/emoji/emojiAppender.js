import e from '../../helpers/data/emoji';

const emojis = e.getEmojis();

const findEmoji = (msg) => {
  const regex = /:*\w*:/g;
  const myEmoji = msg.match(regex);
  if (myEmoji) {
    const selectedEmoji = emojis.find((x) => x.code === myEmoji[0]);
    const newString = msg.replace(selectedEmoji.code, selectedEmoji.emoji);
    return newString;
  }
  return msg;
};

export default { findEmoji };
