/// <reference types="./Observable.toReadonlyArray.d.ts" />

import { bind, pipe } from "../../../functions.js";
import Observable_run from "../../Observable/__private__/Observable.run.js";
import Observable_forEach from "./Observable.forEach.js";
const Observable_toReadonlyArray = () => observable => {
    const result = [];
    pipe(observable, Observable_forEach(bind(Array.prototype.push, result)), Observable_run());
    return result;
};
export default Observable_toReadonlyArray;
