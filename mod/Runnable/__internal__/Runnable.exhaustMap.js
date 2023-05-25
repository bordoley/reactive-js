/// <reference types="./Runnable.exhaustMap.d.ts" />

import Observable_map from "../../Observable/__internal__/Observable.map.js";
import { pipe } from "../../functions.js";
import Runnable_exhaust from "./Runnable.exhaust.js";
const Runnable_exhaustMap = (selector) => (obs) => pipe(obs, Observable_map(selector), Runnable_exhaust());
export default Runnable_exhaustMap;
