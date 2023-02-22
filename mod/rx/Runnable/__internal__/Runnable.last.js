/// <reference types="./Runnable.last.d.ts" />

import { none, pipe } from "../../../functions.js";
import Runnable_forEach from "./Runnable.forEach.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_last = () => src => {
    let result = none;
    pipe(src, Runnable_forEach(next => {
        result = next;
    }), Runnable_run());
    return result;
};
export default Runnable_last;
