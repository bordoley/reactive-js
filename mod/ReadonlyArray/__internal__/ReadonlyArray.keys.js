/// <reference types="./ReadonlyArray.keys.d.ts" />

import Observable_range from "../../Observable/__internal__/Observable.range.js";
const ReadonlyArray_keys = (() => arr => Observable_range(0, {
    count: arr.length,
}));
export default ReadonlyArray_keys;
