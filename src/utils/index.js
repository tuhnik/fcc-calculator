export const removeTrailingDot = str => {
  if (str.match(/[+-/*]$/gi)) {
    return removeTrailingDot(str.replace(/.$/, ''));
  }
  return str;
};
