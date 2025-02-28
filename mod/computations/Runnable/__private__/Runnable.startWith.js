/// <reference types="./Runnable.startWith.d.ts" />

import { pipe } from "../../../functions.js";
import Runnable_concatWith from "./Runnable.concatWith.js";
import Runnable_fromReadonlyArray from "./Runnable.fromReadonlyArray.js";
const Runnable_startWith = (...values) => (deferable) => pipe(values, Runnable_fromReadonlyArray(), Runnable_concatWith(deferable));
export default Runnable_startWith;
