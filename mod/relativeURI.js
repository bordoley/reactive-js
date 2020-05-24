export const empty = {
    pathname: "",
    search: "",
    hash: "",
};
export const fromHref = (href) => {
    const uri = new URL(href);
    return {
        pathname: uri.pathname,
        search: uri.search,
        hash: uri.hash,
    };
};
export const toURL = (relativeURI, base) => {
    const { pathname, search, hash } = relativeURI;
    return new URL(`${pathname}${search}${hash}`, base);
};
export const toHref = (relativeURI, base) => toURL(relativeURI, base).href;
export const encodeAndSetHash = (relativeURI, hash) => ({
    ...relativeURI,
    hash: hash.length > 0 ? `#${encodeURIComponent(hash)}` : "",
});
export const decodeAndGetHash = ({ hash }) => hash.length > 0 ? decodeURIComponent(hash.substring(1)) : "";
