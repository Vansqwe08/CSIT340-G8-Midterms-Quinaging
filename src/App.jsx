import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Docs from "./component/Docs";
import Guide from "./component/Guide";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead((count) => count + 1);
  }

  function handleBookmark() {
    setBookmarks((count) => count + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[18rem_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar />
      <div className="min-w-0 px-12 py-10">
        <Docs
          read={read}
          bookmarks={bookmarks}
          handleRead={handleRead}
          handleBookmark={handleBookmark}
          handleReset={handleReset}
        />
        <Guide />
      </div>
    </div>
  );
}

export default App;
