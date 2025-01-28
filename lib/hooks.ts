import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

// type useSectionInViewProps = { sectionName: SectionName; };

export function useSectionInView( sectionName: SectionName, threashold = 0.75) {
    const {ref, inView } = useInView({threshold: threashold,});
    const {setActiveSection, timeOfLastClick} = useActiveSectionContext();
    
    useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) { setActiveSection("Home"); }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);
    return {ref};
}