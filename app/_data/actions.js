"use server";

export async function getShortenUrl(url) {
  if (!url) return { error: "Please add a link" };

  const res = await fetch("https://cleanuri.com/api/v1/shorten", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  const data = await res.json();

  return data;
}
