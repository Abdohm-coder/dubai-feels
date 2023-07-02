export const capitalizeString = (str?: string) =>
  str
    ? str.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      })
    : "";
