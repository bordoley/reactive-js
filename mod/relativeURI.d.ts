declare type RelativeURI = {
    pathname: string;
    search: string;
    hash: string;
};
declare const empty: {
    pathname: string;
    search: string;
    hash: string;
};
declare const fromHref: (href: string) => RelativeURI;
declare const toURL: (relativeURI: RelativeURI, base: string | URL) => URL;
declare const toHref: (relativeURI: RelativeURI, base: string | URL) => string;
declare const encodeAndSetHash: (relativeURI: RelativeURI, hash: string) => RelativeURI;
declare const decodeAndGetHash: ({ hash }: RelativeURI) => string;

export { RelativeURI, decodeAndGetHash, empty, encodeAndSetHash, fromHref, toHref, toURL };
