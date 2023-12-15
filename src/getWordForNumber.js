export const getWordForNumber = (time, word1, word2, word3, word4) => {
  if (time % 10 === 1) {
    return word1;
  } else if (time % 10 >= 2 && time % 10 <= 4) {
    return word2;
  } else return word3;
};
