import e from '../../helpers/data/emoji';

const emojis = e.getEmojis();

const findEmoji = (msg) => {
  const regex = /[:...:]/g;
  const myEmoji = msg.match(regex);
  if (myEmoji) {
    const selectedEmoji = emojis.find((x) => x.code === myEmoji);
    console.log(selectedEmoji);
    msg.replace(myEmoji, selectedEmoji.emoji);
  }
  return msg;
};

export default { findEmoji };
