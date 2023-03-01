/// <reference types="./Runnable.last.d.ts" />

import { none, pipe } from "../../../functions.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_last = () => src => {
    let result = none;
    pipe(src, Observable_forEach(next => {
        result = next;
    }), Runnable_run());
    return result;
};
export default Runnable_last;
