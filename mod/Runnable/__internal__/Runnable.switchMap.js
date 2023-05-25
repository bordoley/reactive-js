/// <reference types="./Runnable.switchMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { pipe } from "../../functions.js";
import Runnable_switchAll from "./Runnable.switchAll.js";
const Runnable_switchMap = (selector) => (obs) => pipe(obs, Observable_map(selector), Runnable_switchAll());
export default Runnable_switchMap;
