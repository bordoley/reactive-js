/// <reference types="./Observable.toRunnable.d.ts" />

import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_throws from "./Observable.throws.js";
const Observable_toRunnable = () => (obs) => Observable_isRunnable(obs) ? obs : Observable_throws();
export default Observable_toRunnable;
