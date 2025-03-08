/// <reference types="./Observable.first.d.ts" />

import { none, pipe } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
import Observable_takeFirst from "./Observable.takeFirst.js";
const Observable_first = (options) => observable => {
    let result = none;
    pipe(observable, Observable_takeFirst(), Observable_forEach((v) => {
        result = v;
    }), Observable_run(options));
    return result;
};
export default Observable_first;
