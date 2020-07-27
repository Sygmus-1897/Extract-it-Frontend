import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: 10,
    borderRadius: 5,
  },
}));

const ProgressBar = (props) => {
  const classes = useStyles();
  return (
    <LinearProgress
      className={classes.root}
      variant="determinate"
      value={props.progress}
    />
  );
};

export default ProgressBar;
