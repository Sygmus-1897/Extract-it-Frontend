import React, { useState, useEffect } from "react";
import Progressbar from "./linear_progress_bar";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const ProgressWindow = (props) => {
  const classes = useStyles();
  let [progress, setProgress] = useState(0);

  useEffect(() => {
    let value =
      ((props.currDate - props.startDate) * 100) /
      (props.endDate - props.startDate);
    console.log(value);
    let rounded_value = Math.round(value * 10) / 10;
    setProgress(rounded_value);
  }, [props.currDate, props.startDate, props.endDate]);

  // const handleToggle = () => {
  //   props.setOpen(!props.open);
  // };

  const getDate = () => {
    const date = new Date(props.currDate * 1000);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <Backdrop
      className={classes.backdrop}
      open={props.open}
      // onClick={handleToggle}
    >
      <div className="progress-window">
        {props.currPost ? (
          <div className="progress-window-container">
            <div className="progress-window-title-container">
              <label className="progress-window-title">Extracting Data</label>
            </div>
            <div className="progress-section">
              <label className="progress-counter">
                {progress.toString().concat("%")}
              </label>
              <Progressbar progress={progress} />
            </div>
            <div className="info-section">
              <div className="post-info">
                <label className="current-post-label">Working on postID:</label>
                <label className="current-post">{props.currPost}</label>
              </div>
              <div className="date-info">
                <label className="current-date-label">
                  Scraping posts from:
                </label>
                <label className="current-date">{getDate()}</label>
              </div>
            </div>
          </div>
        ) : (
          <label className="loading-msg">loading...</label>
        )}
      </div>
    </Backdrop>
  );
};

export default ProgressWindow;
