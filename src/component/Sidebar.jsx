function Sidebar() {
  return (
    <nav
      aria-label="Guide sections"
      className="flex flex-col bg-[#5C4F4A] p-6 text-[#EDE9E6] md:min-h-screen md:p-12"
    >
      <a className="text-3xl font-bold" href="#top">Git Quickstart</a>
      <ul className="mt-6 flex flex-wrap gap-x-5 text-lg md:mt-10 md:block md:space-y-2 md:text-xl">
        <li><a className="inline-block border-l-4 border-[#C9996B] py-2 pl-4 hover:text-white" href="#create">Create</a></li>
        <li><a className="inline-block border-l-4 border-[#C9996B] py-2 pl-4 hover:text-white" href="#rename">Rename</a></li>
        <li><a className="inline-block border-l-4 border-[#C9996B] py-2 pl-4 hover:text-white" href="#connect">Connect</a></li>
        <li><a className="inline-block border-l-4 border-[#C9996B] py-2 pl-4 hover:text-white" href="#upload">Upload</a></li>
      </ul>
      <p className="mt-6 text-base md:mt-auto md:pt-10 md:text-xl">
        Written by Kris Van Ruzzel Quinaging
      </p>
    </nav>
  );
}

export default Sidebar;
