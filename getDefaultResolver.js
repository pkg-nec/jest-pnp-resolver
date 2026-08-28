let defaultResolver;

module.exports = () => {
  if (!defaultResolver) {
    try {
      defaultResolver = require(`@pkg-nec/jest-resolve/build/defaultResolver`).default;
    } catch (error) {
      defaultResolver = require(`@pkg-nec/jest-resolve/build/default_resolver`).default;
    }
  }

  return defaultResolver;
};
