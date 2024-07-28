"use client";
import { getShortenUrl } from "@/app/_data/actions";
import { useState } from "react";
import useLocalStorage from "@/app/_hooks/useLocalStorage";
import LinksList from "@/app/_components/LinksList";

function URLShorteningForm() {
  const [url, setUrl] = useState("");
  const [err, setErr] = useState("");

  const [links, setLinks] = useLocalStorage("links", []);

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    const shortendLink = await getShortenUrl(url);
    if (shortendLink.result_url) {
      const isAlreadyPresent = links.some(
        (link) => link.result_url === shortendLink.result_url,
      );
      isAlreadyPresent ||
        setLinks([...links, { url, result_url: shortendLink.result_url }]);
    }
    if (shortendLink.error) setErr(shortendLink.error);

    setUrl("");
  }

  return (
    <>
      <div className="mx-auto max-w-5xl -translate-y-1/2 px-6">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-between gap-4 rounded-lg bg-primary-2 bg-bg-shorten-mobile bg-right-top bg-no-repeat px-10 py-10 sm:flex-row sm:bg-bg-shorten-desktop"
        >
          <div className="flex-1">
            <input
              name="url"
              className={`w-full rounded-lg px-4 py-3 ring-opacity-70 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-neutral-4 ${err ? "ring-4 ring-secondary placeholder:text-secondary" : "placeholder:text-neutral-2"}`}
              type="text"
              placeholder="Shorten a link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            {err && <p className="mt-2 text-sm italic text-secondary">{err}</p>}
          </div>
          <button className="h-fit rounded-lg border-none bg-primary-1 px-6 py-3 text-white transition-colors hover:bg-opacity-70">
            Shorten it!
          </button>
        </form>
      </div>
      <LinksList links={links} />
    </>
  );
}

export default URLShorteningForm;
