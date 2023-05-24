/// <reference types="./Observable.reduce.d.ts" />

import { pipe } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_run from "./Observable.run.js";
const Observable_reduce = (reducer, initialValue) => (runnable) => {
    if (Observable_isEnumerable(runnable)) {
        const enumerator = runnable[EnumerableLike_enumerate]();
        let acc = initialValue();
        while (enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            acc = reducer(acc, next);
        }
        return acc;
    }
    else {
        let acc = initialValue();
        pipe(runnable, Observable_forEach((next) => {
            acc = reducer(acc, next);
        }), Observable_run());
        return acc;
    }
};
export default Observable_reduce;
