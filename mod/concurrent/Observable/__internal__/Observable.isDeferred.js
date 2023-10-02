/// <reference types="./Observable.isDeferred.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isRunnable, } from "../../../concurrent.js";
const Observable_isDeferred = (obs) => obs[ObservableLike_isRunnable] && obs[ObservableLike_isDeferred];
export default Observable_isDeferred;
