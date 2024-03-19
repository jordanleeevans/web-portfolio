export function ExpandButton({ setIsExpanded, remainingTags }) {
  return (
    <li
      className="bg-blue-500 hover:bg-blue-700 transition-colors duration-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full cursor-pointer"
      onClick={() => setIsExpanded(true)}
    >
      +{remainingTags}
    </li>
  );
}

export function CollapseButton({ setIsExpanded }) {
  return (
    <li
      className="bg-red-500 hover:bg-red-700 transition-colors duration-200 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full cursor-pointer"
      onClick={() => setIsExpanded(false)}
    >
      - Less
    </li>
  );
}
