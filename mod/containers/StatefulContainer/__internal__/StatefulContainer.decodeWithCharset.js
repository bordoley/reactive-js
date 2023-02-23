/// <reference types="./StatefulContainer.decodeWithCharset.d.ts" />

import { partial, pipe } from "../../../functions.js";
const StatefulContainer_decodeWithCharset = (lift) => (operator) => options => {
    var _a;
    const charset = (_a = options === null || options === void 0 ? void 0 : options.charset) !== null && _a !== void 0 ? _a : "utf-8";
    return pipe(operator, partial(charset), lift);
};
export default StatefulContainer_decodeWithCharset;
