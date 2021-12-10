export const getEmojiData = () => {
  try {
    const emojiData = JSON.parse(localStorage.getItem('emojis'));
    return emojiData;
  } catch (error) {
    console.log(error);
  }
};
