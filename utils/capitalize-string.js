export const capitalizeString = (str) =>
  str
    ? str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      })
    : "";
