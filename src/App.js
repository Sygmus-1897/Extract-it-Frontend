import React, { useState } from "react";
import SubredditRow from "./components/subreddit_row/subreddit_row.jsx";
import ResumeRow from "./components/resume_row/resume_row";
import StartButton from "./components/start_btn/start_btn";

function App() {
  let [subreddit, setSubreddit] = useState("");

  return (
    <>
      <form className="main-card">
        <SubredditRow subreddit={subreddit} setSubreddit={setSubreddit} />
        <ResumeRow />
        <StartButton subreddit={subreddit} />
      </form>
    </>
  );
}

export default App;
