/// <reference types="./Observable.isRunnable.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
const Observable_isRunnable = (obs) => obs[ObservableLike_isRunnable] && obs[ObservableLike_isDeferred];
export default Observable_isRunnable;
