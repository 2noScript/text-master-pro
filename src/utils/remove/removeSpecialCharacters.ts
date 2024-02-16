export const removeSpecialCharacters = (str: string) =>
  str.replace(/[^\w\s]/gi, "");
