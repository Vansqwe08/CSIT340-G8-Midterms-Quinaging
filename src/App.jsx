import { useState } from "react";
import Docs from "./component/Docs";
import Feedback from "./component/Feedback";
import Guide from "./component/Guide";
import Sidebar from "./component/Sidebar";

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
    <div id="top" className="grid min-h-screen grid-cols-1 bg-[#EDE9E6] text-[#5C4F4A] md:grid-cols-[18rem_minmax(0,1fr)]">
      <Sidebar />
      <main className="min-w-0 px-6 py-8 md:px-12 md:py-10">
        <Docs
          read={read}
          bookmarks={bookmarks}
          onRead={handleRead}
          onBookmark={handleBookmark}
          onReset={handleReset}
        />
        <Guide />
        <Feedback />
      </main>
    </div>
  );
}

export default App;
