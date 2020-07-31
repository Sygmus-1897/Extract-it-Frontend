import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "20px",
    border: "none",
    outline: "none",
    color: "#253237",
    backgroundColor: "#dee2e6",
    "&:hover": {
      backgroundColor: "#e9ecef",
    },
    "&:active": {
      backgroundColor: "#ced4da",
    },
  },
}));

const StopButton = (props) => {
  const onStopClicked = (event) => {
    event.preventDefault();

    axios
      .post("/stop_posts")
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  const classes = useStyles();
  return (
    <Button className={classes.button} onClick={onStopClicked}>
      STOP
    </Button>
  );
};

export default StopButton;
