/// <reference types="./Observable.isRunnable.d.ts" />

import { ObservableLike_isRunnable, } from "../../../rx.js";
const Observable_isRunnable = (obs) => obs[ObservableLike_isRunnable];
export default Observable_isRunnable;
