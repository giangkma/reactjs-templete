module.exports = {
  // skipCI: false,d
  hooks: {
    "pre-commit": "npm run lint:diff -s",
    "pre-push": "npm run lint -s",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  }
};
