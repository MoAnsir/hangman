export const words = ["test", "javascript", "html"];

export const randomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

export const wordSplit = () => {
  return randomWord().split("");
};
