/// <reference types="./Observable.isDeferred.d.ts" />

import { ObservableLike_isDeferred, } from "../../../concurrent.js";
const Observable_isDeferred = (obs) => obs[ObservableLike_isDeferred];
export default Observable_isDeferred;
