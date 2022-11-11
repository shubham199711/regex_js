const { toNFAFromInfixExp, recognize } = require("./nfa");

function createMatcher(exp) {
  const nfa = toNFAFromInfixExp(exp);
  return (word) => recognize(nfa, word);
}

module.exports = { createMatcher };
