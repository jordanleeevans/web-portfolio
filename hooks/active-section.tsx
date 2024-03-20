import { SectionName } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export default function useSectionInView(
  sectionName: useSectionInViewProps["sectionName"],
  threshold = 0.75 // 75% of the section must be in view
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
    inView,
  };
}
