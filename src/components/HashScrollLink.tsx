"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";

type HashScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function HashScrollLink({ href, className, children }: HashScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") {
      return;
    }

    const targetUrl = new URL(href, window.location.origin);
    const targetHash = targetUrl.hash;

    if (!targetHash || targetUrl.pathname !== window.location.pathname) {
      return;
    }

    const targetElement = document.querySelector<HTMLElement>(targetHash);

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });

    const nextUrl = `${targetUrl.pathname}${targetHash}`;
    if (`${window.location.pathname}${window.location.hash}` !== nextUrl) {
      window.history.pushState(null, "", nextUrl);
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
