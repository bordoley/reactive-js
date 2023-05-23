/// <reference types="./Observable.concatMap.d.ts" />

import { pipe } from "../../functions.js";
import Observable_concatAll from "./Observable.concatAll.js";
import Observable_map from "./Observable.map.js";
const Observable_concatMap = ((selector) => (obs) => pipe(obs, Observable_map(selector), Observable_concatAll()));
export default Observable_concatMap;
