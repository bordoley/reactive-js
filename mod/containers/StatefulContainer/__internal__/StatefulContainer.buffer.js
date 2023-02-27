/// <reference types="./StatefulContainer.buffer.d.ts" />

import { max } from "../../../__internal__/math.js";
import { MAX_SAFE_INTEGER } from "../../../constants.js";
import { partial, pipe } from "../../../functions.js";
const StatefulContainer_buffer = (lift) => (operator) => (options = {}) => {
    var _a;
    const maxBufferSize = max((_a = options.maxBufferSize) !== null && _a !== void 0 ? _a : MAX_SAFE_INTEGER, 1);
    return pipe(operator, partial(maxBufferSize), lift);
};
export default StatefulContainer_buffer;
