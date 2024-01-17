/// <reference types="./Observable.toReadonlyArray.d.ts" />

import { Array, Array_push } from "../../../__internal__/constants.js";
import { bind, pipe } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
const Observable_toReadonlyArray = () => observable => {
    const result = [];
    pipe(observable, Observable_forEach(bind(Array.prototype[Array_push], result)), Observable_run());
    return result;
};
export default Observable_toReadonlyArray;
