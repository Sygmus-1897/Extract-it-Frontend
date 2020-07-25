import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: { color: "red", marginBottom: "10px" },
}));

const SubredditRow = (props) => {
  const classes = useStyles();

  const handleOnChange = (event) => {
    props.setSubreddit(event.target.value);
  };

  return (
    <div className="subreddit-div">
      <TextField
        label="Subreddit"
        onChange={handleOnChange}
        value={props.subreddit}
        className={classes.textField}
        InputProps={{
          startAdornment: <InputAdornment position="start">r/</InputAdornment>,
        }}
      />
    </div>
  );
};

export default SubredditRow;
