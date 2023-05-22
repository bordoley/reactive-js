/// <reference types="./Runnable.someSatisfy.d.ts" />

import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { isFalse, pipe } from "../../functions.js";
import { EnumerableLike_enumerate, EnumeratorLike_current, EnumeratorLike_move, } from "../../types.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_someSatisfy = (predicate) => (runnable) => {
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
        }), Observable_takeWhile(isFalse), Runnable_run());
        return result;
    }
};
export default Runnable_someSatisfy;
