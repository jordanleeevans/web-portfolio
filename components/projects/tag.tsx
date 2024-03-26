import { TagProps } from "@/lib/types";

export default function Tag({ tag }: TagProps) {
  return (
    <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full">
      {tag}
    </li>
  );
}
