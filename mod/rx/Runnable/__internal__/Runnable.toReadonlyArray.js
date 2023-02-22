/// <reference types="./Runnable.toReadonlyArray.d.ts" />

import { pipe } from "../../../functions.js";
import Runnable_forEach from "./Runnable.forEach.js";
import Runnable_run from "./Runnable.run.js";
const Runnable_toReadonlyArray = () => (runnable) => {
    const result = [];
    pipe(runnable, Runnable_forEach(x => result.push(x)), Runnable_run());
    return result;
};
export default Runnable_toReadonlyArray;
