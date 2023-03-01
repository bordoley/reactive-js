/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { pipe } from "../../../functions.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_toReadonlyArray = () => observable => {
    const result = [];
    pipe(observable, Observable_forEach(next => {
        result.push(next);
    }), Runnable_run());
    return result;
};
export default Runnable_toReadonlyArray;
