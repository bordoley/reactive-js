/// <reference types="./Observable.last.d.ts" />

import { none, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_run from "./Observable.run.js";
const Observable_last = () => (src) => {
    if (Observable_isEnumerable(src)) {
        const enumerator = src[EnumerableLike_enumerate]();
        let last = none;
        while (enumerator[EnumeratorLike_move]()) {
            last = enumerator[EnumeratorLike_current];
        }
        return last;
    }
    else {
        let result = none;
        pipe(src, Observable_forEach((next) => {
            result = next;
        }), Observable_run());
        return result;
    }
};
export default Observable_last;
