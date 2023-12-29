const mimeTypes: { [key: string]: string } = {
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "png": "image/png",
  "gif": "image/gif",
  "svg": "image/svg+xml",
  "tif": "image/tiff",
  "jfif": "image/jpeg",
  "jpe": "image/jpeg",
  "pbm": "image/x-portable-bitmap",
  "pgm": "image/x-portable-graymap",
  "ppm": "image/x-portable-pixmap",
  "pnm": "image/x-portable-anymap",
  "apng": "image/apng",
  "bmp": "image/bmp",
  "webp": "image/webp",
  "heif": "image/heif",
  "heic": "image/heic",
  "avif": "image/avif",
  "ico": "image/x-icon",
  "tiff": "image/tiff",
  "svgz": "image/svg+xml",
  "wmf": "image/wmf",
  "emf": "image/emf",
  "pcx": "image/pcx",
  "djvu": "image/vnd.djvu",
  "djv": "image/vnd.djvu",
  "html": "text/html",
};

export const get_suffix_from_mimetype = (mimetype: string) => {
  const suffix = mimetype.split("/")[1];
  if (suffix === "svg+xml") return "svg";
  if (!suffix) return "json";
  return suffix;
};

export const short_address = (address: string, number=6) => {
  return address.slice(0, number) + "..." + address.slice(-number);
};

export const getMimeType = (extension: string): string => {
  const normalizedExt = extension.toLowerCase();

  return mimeTypes[normalizedExt] || "application/octet-stream";
};

export const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getSupply = (supply: number, divisible: boolean) => {
  return divisible ? (supply / 100000000).toFixed(2) : supply;
};