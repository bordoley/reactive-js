/// <reference types="./Observable.switchMap.d.ts" />

import { pipe } from "../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_switchAll from "./Observable.switchAll.js";
const Observable_switchMap = ((selector) => (obs) => pipe(obs, Observable_map(selector), Observable_switchAll()));
export default Observable_switchMap;
