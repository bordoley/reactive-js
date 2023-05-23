/// <reference types="./Observable.exhaustMap.d.ts" />

import { pipe } from "../../functions.js";
import Observable_exhaust from "./Observable.exhaust.js";
import Observable_map from "./Observable.map.js";
const Observable_exhaustMap = ((selector) => (obs) => pipe(obs, Observable_map(selector), Observable_exhaust()));
export default Observable_exhaustMap;
