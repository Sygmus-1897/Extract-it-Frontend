import React from "react";
import ResumeLabel from "./resume_lbl";
import { Switch } from "@material-ui/core";

const ResumeRow = (props) => {
  const handleCheck = (event) => {
    props.setResumeCheck(!props.resumeCheck);
  };

  return (
    <div className="resume-div">
      <ResumeLabel />
      <Switch
        checked={props.resumeCheck}
        onChange={handleCheck}
        name="resume-switch"
        color="primary"
      />
    </div>
  );
};

export default ResumeRow;
