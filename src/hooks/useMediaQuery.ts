import {getThemeName} from "@/style/theme";
import { useEffect, useState } from "react"

export const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(window.matchMedia(getThemeName("light").mediaQuery.mobile).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px");
    
    setIsMobile(mediaQuery.matches);
  }, []);

  return {isMobile};
}

