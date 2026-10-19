function Section({ id, title, description, command }) {
  return (
    <section id={id} className="scroll-mt-6 border-t border-[#C9996B] py-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-1 text-xl">{description}</p>
      <code className="mt-3 block overflow-x-auto rounded-lg bg-[#5C766D] px-6 py-3 font-mono text-base text-[#EDE9E6] sm:text-xl">
        {command}
      </code>
    </section>
  );
}

export default Section;
