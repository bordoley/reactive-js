/// <reference types="./Observable.someSatisfy.d.ts" />

import { isFalse, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_map from "./Observable.map.js";
import Observable_run from "./Observable.run.js";
import Observable_takeWhile from "./Observable.takeWhile.js";
const Observable_someSatisfy = (predicate) => (runnable) => {
    if (Observable_isEnumerable(runnable)) {
        const enumerator = runnable[EnumerableLike_enumerate]();
        let result = false;
        while (enumerator[EnumeratorLike_move]()) {
            const next = enumerator[EnumeratorLike_current];
            result = predicate(next);
            if (result) {
                break;
            }
        }
        return result;
    }
    else {
        let result = false;
        pipe(runnable, Observable_map(predicate), Observable_forEach((next) => {
            result = next;
        }), Observable_takeWhile(isFalse), Observable_run());
        return result;
    }
};
export default Observable_someSatisfy;
