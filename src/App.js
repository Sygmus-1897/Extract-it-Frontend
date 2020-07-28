import React, { useState, useEffect } from "react";
import SubredditRow from "./components/subreddit_row/subreddit_row.jsx";
import ResumeRow from "./components/resume_row/resume_row";
import StartButton from "./components/start_btn/start_btn";
import ProgressWindow from "./components/progress_window/progress_window";

function App() {
  let [subreddit, setSubreddit] = useState("");
  let [resumeCheck, setResumeCheck] = useState(true);
  let [openProgressWindow, setOpenProgressWindow] = useState(false);
  let [startDate, setStartDate] = useState(0);
  let [endDate, setEndDate] = useState(1);
  let [currDate, setCurrDate] = useState(0);
  let [currPost, setCurrPost] = useState("");
  let [dataSize, setDataSize] = useState(1);
  let [currData, setCurrData] = useState(0);
  // let [serverResponse, setServerResponse] = useState("");

  useEffect(() => {
    let eventSource = new EventSource("http://localhost:5000/post_id");
    eventSource.addEventListener("bounds", (e) => {
      let obj = JSON.parse(e["data"]);
      console.log(e);
      setStartDate(obj["starting_date"]);
      setCurrDate(obj["starting_date"]);
      setEndDate(obj["ending_date"]);
    });
    eventSource.addEventListener("curr_date", (e) => {
      console.log(e);
      setCurrDate(JSON.parse(e["data"])["current_date"]);
    });
    eventSource.addEventListener("post_id", (e) => {
      console.log(e);
      let obj = JSON.parse(e["data"]);
      setCurrPost(obj["post_id"]);
      setCurrData(obj["curr_data"]);
    });
    eventSource.addEventListener("stop", (e) => {
      setOpenProgressWindow(false);
    });
    eventSource.addEventListener("metadata_data_size", (e) => {
      setDataSize(JSON.parse(e["data"])["data_size"]);
    });
  }, []);

  return (
    <>
      <form className="main-card">
        <SubredditRow subreddit={subreddit} setSubreddit={setSubreddit} />
        <ResumeRow resumeCheck={resumeCheck} setResumeCheck={setResumeCheck} />
        <StartButton
          subreddit={subreddit}
          resume={resumeCheck}
          open={openProgressWindow}
          setOpen={setOpenProgressWindow}
        />
      </form>
      {openProgressWindow && (
        <ProgressWindow
          open={openProgressWindow}
          setOpen={setOpenProgressWindow}
          startDate={startDate}
          endDate={endDate}
          currDate={currDate}
          currPost={currPost}
        />
      )}
    </>
  );
}

export default App;
