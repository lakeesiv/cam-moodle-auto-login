/*
taken from https://stackoverflow.com/a/54026460/15032172
This was used as it is siginicantly more lightweight than exisitng crypto libaries
 */

export const cipher = (salt: string): any => {
  const textToChars = (text: any) =>
    text.split("").map((c: any) => c.charCodeAt(0));
  const byteHex = (n: any) => ("0" + Number(n).toString(16)).substr(-2);
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a: any, b: any) => a ^ b, code);

  return (text: any) =>
    text.split("").map(textToChars).map(applySaltToChar).map(byteHex).join("");
};

export const decipher = (salt: string): any => {
  const textToChars = (text: any) =>
    text.split("").map((c: any) => c.charCodeAt(0));
  const applySaltToChar = (code: any) =>
    textToChars(salt).reduce((a: any, b: any) => a ^ b, code);
  return (encoded: any) =>
    encoded
      .match(/.{1,2}/g)
      .map((hex: any) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode: any) => String.fromCharCode(charCode))
      .join("");
};
