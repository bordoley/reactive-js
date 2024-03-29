/// <reference types="./Observable.mergeMap.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_mergeAll from "./Observable.mergeAll.js";
const Observable_mergeMap = ((selector, options) => (obs) => pipe(obs, Observable_map(selector), Observable_mergeAll(options)));
export default Observable_mergeMap;
