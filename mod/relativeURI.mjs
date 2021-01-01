/// <reference types="./relativeURI.d.ts" />
const empty = {
    pathname: "",
    search: "",
    hash: "",
};
const fromHref = (href) => {
    const uri = new URL(href);
    return {
        pathname: uri.pathname,
        search: uri.search,
        hash: uri.hash,
    };
};
const toURL = (relativeURI, base) => {
    const { pathname, search, hash } = relativeURI;
    return new URL(`${pathname}${search}${hash}`, base);
};
const toHref = (relativeURI, base) => toURL(relativeURI, base).href;
const encodeAndSetHash = (relativeURI, hash) => ({
    ...relativeURI,
    hash: hash.length > 0 ? `#${encodeURIComponent(hash)}` : "",
});
const decodeAndGetHash = ({ hash }) => hash.length > 0 ? decodeURIComponent(hash.substring(1)) : "";

export { decodeAndGetHash, empty, encodeAndSetHash, fromHref, toHref, toURL };
