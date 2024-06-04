const generateAvatarFromHash = (userId) => {
  let hashedId = userId
    .toString()
    .split("")
    .reduce((acc, char) => {
      return char.charCodeAt(0) + (acc << 6) + (acc << 16) - acc;
    }, 0);
  let red = (hashedId & 0xff0000) >> 16;
  let green = (hashedId & 0x00ff00) >> 8;
  let blue = hashedId & 0x0000ff;

  return { red, green, blue };
};

export default generateAvatarFromHash;
