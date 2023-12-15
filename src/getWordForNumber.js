export const getWordForNumber = (time, word1, word2, word3, word4) => {
  if (time === 1) {
    return word1;
  } else if (time >= 2 && time <= 4) {
    return word2;
  } else if (
    (time >= 5 && time <= 20) ||
    (time % 10 >= 5 && time % 10 <= 9) ||
    time % 10 === 0 || time === 20
  ) {
    return word3;
  } else {
    return word4;
  }
};
