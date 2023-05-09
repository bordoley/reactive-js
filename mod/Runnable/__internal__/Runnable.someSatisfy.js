/// <reference types="./Runnable.someSatisfy.d.ts" />

import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import { isFalse, pipe } from "../../functions.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_someSatisfy = (predicate) => (runnable) => {
    let result = false;
    pipe(runnable, Observable_map(predicate), Observable_forEach(next => {
        result = next;
    }), Observable_takeWhile(isFalse), Runnable_run());
    return result;
};
export default Runnable_someSatisfy;
