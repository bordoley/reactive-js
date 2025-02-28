/// <reference types="./Runnable.endWith.d.ts" />

import { pipe } from "../../../functions.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
import Runnable_fromReadonlyArray from "./Runnable.fromReadonlyArray.js";
const Runnable_endWith = (...values) => (deferable) => pipe(deferable, Runnable_concatWith(pipe(values, Runnable_fromReadonlyArray())));
export default Runnable_endWith;
