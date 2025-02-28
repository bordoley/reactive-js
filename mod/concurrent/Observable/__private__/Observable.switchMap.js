/// <reference types="./Observable.switchMap.d.ts" />

import { ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { ObservableLike_isDeferred, } from "../../../concurrent.js";
import { pipe } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
const Observable_switchMap = ((selector, options) => (obs) => pipe(obs, Observable_map(selector), Observable_switchAll(options)));
export default Observable_switchMap;
