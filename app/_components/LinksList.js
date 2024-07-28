"use client";

import { useState, useEffect } from "react";
import LinkCard from "@/app/_components/LinkCard";

function LinksList({ links }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || links.length === 0) return null;

  return (
    <ul className="mx-auto max-w-5xl -translate-y-12 space-y-5 px-6 py-4 sm:-translate-y-8">
      {links.map((link) => (
        <LinkCard key={link.result_url} link={link} />
      ))}
    </ul>
  );
}

export default LinksList;
