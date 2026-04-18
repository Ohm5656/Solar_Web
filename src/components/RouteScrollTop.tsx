"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function RouteScrollTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    // Keep hash navigation working normally on the home page sections.
    if (window.location.hash) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
