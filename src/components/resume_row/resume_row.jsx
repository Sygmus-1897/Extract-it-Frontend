import React from "react";
import ResumeLabel from "./resume_lbl";
import { Switch } from "@material-ui/core";

const ResumeRow = (props) => {
  return (
    <div className="resume-div">
      <ResumeLabel />
      <Switch name="resume-switch" color="primary" />
    </div>
  );
};

export default ResumeRow;
