function Thead() {
  return (
    <thead className="bg-slate-100 dark:bg-slate-700">
      <tr>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-700 uppercase dark:text-slate-400"
        >
          #
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-700 uppercase dark:text-slate-400"
        >
          Name
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-700 uppercase dark:text-slate-400"
        >
          Age
        </th>
        <th
          scope="col"
          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-slate-700 uppercase dark:text-slate-400"
        >
          Email
        </th>
        <th scope="col" colSpan={3} className="p-4"></th>
      </tr>
    </thead>
  );
}

export default Thead;
