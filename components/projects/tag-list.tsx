import { TagListProps } from "@/lib/types";
import Tag from "./tag";
import { ExpandButton, CollapseButton } from "./expand-collapse-buttons";

export default function TagList({
  tags,
  isExpanded,
  setIsExpanded,
}: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-2 mt-4">
      {tags.slice(0, isExpanded ? tags.length : 4).map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
      {tags.length > 4 && !isExpanded && (
        <ExpandButton
          setIsExpanded={setIsExpanded}
          remainingTags={tags.length - 4}
        />
      )}
      {isExpanded && <CollapseButton setIsExpanded={setIsExpanded} />}
    </ul>
  );
}
