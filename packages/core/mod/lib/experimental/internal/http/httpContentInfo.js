import { pipe } from "../../../functions.js";
import { isNone, none } from "../../../option.js";
import { join } from "../../../readonlyArray.js";
import { parseWith } from "../../parserCombinators.js";
import { pToken, httpList } from "./httpGrammar.js";
import { getHeaderValue } from "./httpHeaders.js";
import { parseMediaType, mediaTypeToString, parseMediaTypeOrThrow, mediaTypeIsCompressible, } from "./mediaType.js";
const parseTokenList = pipe(pToken, httpList, parseWith);
export const parseHttpContentInfoFromHeaders = (headers) => {
    var _a, _b, _c;
    const contentEncodingString = (_a = getHeaderValue(headers, "Content-Encoding")) !== null && _a !== void 0 ? _a : "";
    const contentEncodings = parseTokenList(contentEncodingString);
    const contentLengthHeader = (_b = getHeaderValue(headers, "Content-Length")) !== null && _b !== void 0 ? _b : "-1";
    const contentLength = ~~contentLengthHeader;
    const contentType = parseMediaType((_c = getHeaderValue(headers, "Content-Type")) !== null && _c !== void 0 ? _c : "");
    return isNone(contentType)
        ? none
        : {
            contentEncodings,
            contentLength,
            contentType,
        };
};
export const writeHttpContentInfoHeaders = (content, writeHeader) => {
    const { contentLength, contentType, contentEncodings } = content;
    if (contentLength > 0) {
        writeHeader("Content-Length", contentLength.toString(10));
    }
    writeHeader("Content-Type", mediaTypeToString(contentType));
    if (contentEncodings.length > 0) {
        writeHeader("Content-Encoding", pipe(contentEncodings, join(", ")));
    }
};
export const createHttpContentInfo = ({ contentEncodings, contentLength, contentType, }) => ({
    contentEncodings: contentEncodings !== null && contentEncodings !== void 0 ? contentEncodings : [],
    contentLength: contentLength !== null && contentLength !== void 0 ? contentLength : -1,
    contentType: typeof contentType === "string"
        ? parseMediaTypeOrThrow(contentType)
        : contentType,
});
export const contentIsCompressible = (content, db) => content.contentEncodings.length === 0 &&
    mediaTypeIsCompressible(content.contentType, db);
