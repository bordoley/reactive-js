/// <reference types="./Runnable.first.d.ts" />

import { none, pipe } from "../../../functions.js";
import Runnable_forEach from "./Runnable.forEach.js";
import Runnable_run from "./Runnable.run.js";
import Runnable_takeFirst from "./Runnable.takeFirst.js";
const Runnable_first = () => src => {
    let result = none;
    pipe(src, Runnable_takeFirst(), Runnable_forEach(next => {
        result = next;
    }), Runnable_run());
    return result;
};
export default Runnable_first;
