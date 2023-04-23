/// <reference types="./Runnable.everySatisfy.d.ts" />

import { isTrue, pipe } from "../../../functions.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_everySatisfy = (predicate) => (runnable) => {
    let result = true;
    pipe(runnable, Observable_map(predicate), Observable_forEach(next => {
        result = next;
    }), Observable_takeWhile(isTrue), Runnable_run());
    return result;
};
export default Runnable_everySatisfy;
