import React from "react";

const SkillCard = ({ skill }) => {
  return (
    <div className="">
      <h2 className=" border m-3 p-1 px-5 font-bold font-mono text-center rounded-sm">
        {skill}
      </h2>
    </div>
  );
};

export default SkillCard;
