import { none } from "../../../../core/mod/lib/option.js";
import { getHeaderValue } from "./httpHeaders.js";
export const parseHttpDateTime = (v) => {
    const asDate = new Date(v);
    const result = asDate.getTime();
    return v !== "" && !Number.isNaN(result) ? result : none;
};
export const httpDateTimeToString = (v) => {
    const date = new Date(v);
    return date.toUTCString();
};
export const parseHttpDateTimeFromHeaders = (headers, header) => {
    var _a;
    const headerValue = (_a = getHeaderValue(headers, header)) !== null && _a !== void 0 ? _a : "";
    return parseHttpDateTime(headerValue);
};
