/// <reference types="./Runnable.concat.d.ts" />

import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { pipe } from "../../../functions.js";
import Runnable_concatAll from "./Runnable.concatAll.js";
const Runnable_concat = (...runnables) => pipe(runnables, ReadonlyArray_toRunnable(), Runnable_concatAll());
export default Runnable_concat;
