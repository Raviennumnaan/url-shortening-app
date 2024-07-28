import { useState } from "react";

function LinkCard({ link }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(link.result_url).then(() => {
      setIsCopied(true);
    });
  }

  return (
    <li className="flex flex-col items-center justify-between gap-4 divide-y-2 rounded-lg bg-white px-5 py-4 text-sm sm:flex-row sm:gap-10 sm:divide-y-0">
      <p className="text-neutral-4">{link.url}</p>
      <div className="flex w-full flex-col items-start gap-4 pt-4 sm:w-auto sm:flex-row sm:items-center sm:pt-0">
        <p className="text-primary-1">{link.result_url}</p>
        <button
          onClick={handleCopy}
          className={`w-full rounded-lg ${isCopied ? "bg-primary-2" : "bg-primary-1"} py-3 text-white sm:w-28`}
        >
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
    </li>
  );
}

export default LinkCard;
