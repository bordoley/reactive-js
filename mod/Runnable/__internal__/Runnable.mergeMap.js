/// <reference types="./Runnable.mergeMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { pipe } from "../../functions.js";
import Runnable_mergeAll from "./Runnable.mergeAll.js";
const Runnable_mergeMap = (selector, options) => (obs) => pipe(obs, Observable_map(selector), Runnable_mergeAll(options));
export default Runnable_mergeMap;
