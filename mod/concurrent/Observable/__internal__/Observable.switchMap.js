/// <reference types="./Observable.switchMap.d.ts" />

import { ObservableLike_isDeferred, ObservableLike_isPure, ObservableLike_isRunnable, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
const Observable_switchMap = ((selector, options) => (obs) => pipe(obs, Observable_map(selector), Observable_switchAll(options)));
export default Observable_switchMap;
