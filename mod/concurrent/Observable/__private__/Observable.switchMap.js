/// <reference types="./Observable.switchMap.d.ts" />

import { ComputationLike_isDeferred, ComputationLike_isPure, ComputationLike_isSynchronous, } from "../../../computations.js";
import { pipe } from "../../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
const Observable_switchMap = ((selector, options) => (obs) => pipe(obs, Observable_map(selector), Observable_switchAll(options)));
export default Observable_switchMap;
