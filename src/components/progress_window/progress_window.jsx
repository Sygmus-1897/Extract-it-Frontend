import React, { useState, useEffect } from "react";
import CurrentItem from "./curr_item";
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
            <div className="progress-section">
              <CurrentItem
                class="progress-counter"
                message={progress.toString().concat("%")}
              />
              <Progressbar progress={progress} />
            </div>
            <div className="info-section">
              <CurrentItem
                class="current-post-label"
                message="Working on PostID"
              />
              <CurrentItem class="current-post" message={props.currPost} />
              <CurrentItem
                class="current-date-label"
                message="Scraping Posts from"
              />
              <CurrentItem class="current-date" message={getDate()} />
            </div>
          </div>
        ) : (
          <CurrentItem class="loading-msg" message="loading..." />
        )}
      </div>
    </Backdrop>
  );
};

export default ProgressWindow;
