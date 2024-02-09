/// <reference types="./Observable.toReadonlyArray.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { bindMethod, pipe } from "../../../functions.js";
import Observable_forEach from "./Observable.forEach.js";
import Observable_run from "./Observable.run.js";
const Observable_toReadonlyArray = () => observable => {
    const result = [];
    pipe(observable, Observable_forEach(bindMethod(result, Array_push)), Observable_run());
    return result;
};
export default Observable_toReadonlyArray;
