export const toBase64 = (data) => {
  return Buffer.from(`"${data}"`).toString("base64");
};
