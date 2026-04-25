export function getSiteUrl(): string {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  if (url) {
    return url.replace(/\/$/, "");
  }
  return "https://pushkars.in";
}
