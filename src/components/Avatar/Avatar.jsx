import React from "react";
import generateAvatarFromHash from "../../utils/generateAvatarFromHash";
const Avatar = ({
  user,
  isGroup,
  dialogName,
  imgClass = "default",
  textClass = "default",
}) => {
  imgClass = imgClass === "default" ? "w-[53px] h-full" : imgClass;
  textClass = textClass === "default" ? "text-sm " : textClass;

  if (user.photopath) {
    return <img className="avatar" src={user.photopath} alt="#" />;
  } else {
    let colors, firstChar;
    if (isGroup) {
      colors = generateAvatarFromHash(user);
      firstChar = dialogName[0].toUpperCase();
    } else {
      colors = generateAvatarFromHash(user.id);
      firstChar = user.name[0].toUpperCase();
    }
    return (
      <div
        style={{
          background: `rgb(${colors.red},${colors.green},${colors.blue})`,
        }}
        className={`flex items-center rounded-[50%] text-center ${imgClass}   font-semibold   text-[18px]`}
      >
        <span className={`w-full text-white  ${textClass}`}>{firstChar}</span>
      </div>
    );
  }
};
export default Avatar;
