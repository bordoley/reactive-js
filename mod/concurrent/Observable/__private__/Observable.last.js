/// <reference types="./Observable.last.d.ts" />

import { none, pipe } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
const Observable_last = (options) => observable => {
    let result = none;
    pipe(observable, Observable_forEach((v) => {
        result = v;
    }), Observable_run(options));
    return result;
};
export default Observable_last;
