export const getEmojiData = () => {
  try {
    return JSON.parse(localStorage.getItem('emojis'));
  } catch (error) {
    console.log(error);
  }
};
