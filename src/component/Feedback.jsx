import { useState } from "react";

function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
  const total = yes + no;

  function handleYes() {
    setYes((count) => count + 1);
  }

  function handleNo() {
    setNo((count) => count + 1);
  }

  function handleReset() {
    setYes(0);
    setNo(0);
  }

  return (
    <section className="mt-8 rounded-xl bg-[#5C4F4A] p-6 text-[#EDE9E6]">
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="text-2xl font-bold">Was this page helpful?</p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 font-bold"
            onClick={handleYes}
          >
            Yes ({yes})
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg bg-[#C9996B] px-6 py-2 font-bold text-[#5C4F4A]"
            onClick={handleNo}
          >
            No ({no})
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg border-2 border-[#EDE9E6] px-6 py-2 font-bold"
            onClick={handleReset}
          >
            Clear
          </button>
        </div>
        <p className="text-lg" aria-live="polite">
          {yes} out of {total} {total === 1 ? "response" : "responses"}
        </p>
        <span>
            found this helpful.
        </span>
      </div>
    </section>
  );
}

export default Feedback;
