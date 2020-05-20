import { pipe } from "../../../../core/mod/lib/functions.js";
import { map } from "../../../../core/mod/lib/readonlyArray.js";
const bannedHeaders = pipe([
    "Accept",
    "Accept-Charset",
    "Accept-Encoding",
    "Accept-Language",
    "Cache-Control",
    "Content-Encoding",
    "Content-Length",
    "Content-Type",
    "ETag",
    "Expect",
    "Expires",
    "If-Match",
    "If-None-Match",
    "If-Modified-Since",
    "If-Unmodified-Since",
    "If-Range",
    "Last-Modified",
    "Transfer-Encoding",
    "Vary",
], map(s => s.toLowerCase()));
export function getHeaderValue(headers, key) {
    return headers[key.toLowerCase()];
}
export const writeHttpHeaders = (headers, writeHeader) => {
    for (const header in headers) {
        if (headers.hasOwnProperty(header) &&
            !bannedHeaders.includes(header.toLowerCase())) {
            writeHeader(header, headers[header]);
        }
    }
};
export const filterHeaders = (headers) => {
    const result = {};
    const writeHeader = (k, v) => {
        result[k] = v;
    };
    writeHttpHeaders(headers, writeHeader);
    return result;
};
