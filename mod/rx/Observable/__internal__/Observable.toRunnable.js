/// <reference types="./Observable.toRunnable.d.ts" />

import { errorWithWithDebugMessage } from "../../../functions.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_throws from "./Observable.throws.js";
const throwOptions = {
    raise: () => errorWithWithDebugMessage("Observable is not Runnable"),
};
const Observable_toRunnable = () => (obs) => Observable_isRunnable(obs) ? obs : Observable_throws(throwOptions);
export default Observable_toRunnable;
