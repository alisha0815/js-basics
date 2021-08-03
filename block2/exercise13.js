function characterRemover(str, character) {
  return str.replaceAll(character, " ");
}
module.exports = {
  characterRemover,
};
