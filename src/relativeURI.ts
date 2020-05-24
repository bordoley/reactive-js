export type RelativeURI = {
  pathname: string;
  search: string;
  hash: string;
};

export const empty = {
  pathname: "",
  search: "",
  hash: "",
};

export const fromHref = (href: string): RelativeURI => {
  const uri = new URL(href);
  return {
    pathname: uri.pathname,
    search: uri.search,
    hash: uri.hash,
  };
};

export const toURL = (relativeURI: RelativeURI, base: string | URL): URL => {
  const { pathname, search, hash } = relativeURI;
  return new URL(`${pathname}${search}${hash}`, base);
}

export const toHref = (relativeURI: RelativeURI, base: string | URL): string => 
  toURL(relativeURI, base).href;

export const encodeAndSetHash = (relativeURI: RelativeURI, hash: string): RelativeURI => ({
  ...relativeURI,
  hash: hash.length > 0 ? `#${encodeURIComponent(hash)}` : "",
});

export const decodeAndGetHash = ({ hash }: RelativeURI): string =>
  hash.length > 0 ? decodeURIComponent(hash.substring(1)) : "";