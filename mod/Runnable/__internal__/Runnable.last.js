/// <reference types="./Runnable.last.d.ts" />

import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import { none, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_last = () => (src) => {
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
        }), Runnable_run());
        return result;
    }
};
export default Runnable_last;
