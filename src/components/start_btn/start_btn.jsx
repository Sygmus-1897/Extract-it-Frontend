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

const StartButton = (props) => {
  const onStartClicked = (event) => {
    event.preventDefault();
    axios
      .post("/test", {
        method: "POST",
        cache: "no-cache",
        headers: {
          content_type: "application/json",
        },
        data: { some: props.subreddit },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
    // fetch("/test")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const classes = useStyles();
  return (
    <Button className={classes.button} type="submit" onClick={onStartClicked}>
      START
    </Button>
  );
};

export default StartButton;
