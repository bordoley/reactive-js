/// <reference types="./Runnable.everySatisfy.d.ts" />

import Enumerator_everySatisfy from "../../Enumerator/__internal__/Enumerator.everySatisfy.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_isEnumerable from "../../Observable/__internal__/Observable.isEnumerable.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { isTrue, pipe } from "../../functions.js";
import { EnumerableLike_enumerate } from "../../types.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_everySatisfy = (predicate) => (runnable) => {
    if (Observable_isEnumerable(runnable)) {
        return pipe(runnable[EnumerableLike_enumerate](), Enumerator_everySatisfy(predicate));
    }
    else {
        let result = true;
        pipe(runnable, Observable_map(predicate), Observable_forEach((next) => {
            result = next;
        }), Observable_takeWhile(isTrue), Runnable_run());
        return result;
    }
};
export default Runnable_everySatisfy;
