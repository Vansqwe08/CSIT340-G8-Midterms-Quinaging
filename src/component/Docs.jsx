import Header from "./Header";
import StatCard from "./StatCard";

function Docs({ read, bookmarks, onRead, onBookmark, onReset }) {
  return (
    <section className="flex flex-wrap items-end justify-between gap-8 pb-8">
      <div>
        <Header />
        <div className="mt-6 flex flex-wrap gap-4">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
            onClick={onRead}
          >
            Mark as read
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
            onClick={onBookmark}
          >
            Bookmark
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
            onClick={onReset}
          >
            Reset
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-6" aria-live="polite">
        <StatCard value={read} label="Marked as read" />
        <StatCard value={bookmarks} label="Bookmarks" />
      </div>
    </section>
  );
}

export default Docs;
