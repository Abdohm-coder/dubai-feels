export const isTextMatched = (match: string, tag?: string) => {
  if (tag !== undefined && match !== "") {
    if (tag.toLocaleLowerCase() === match.toLocaleLowerCase()) {
      return true;
    }
    return false;
  }
  return false;
};
