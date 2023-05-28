/// <reference types="./Observable.mapWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import Observable_map from "./Observable.map.js";
import Observable_scan from "./Observable.scan.js";
const Observable_mapWithKey = ((mapper) => (obs) => pipe(obs, Observable_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), Observable_map(([cnt, v]) => mapper(v, cnt))));
export default Observable_mapWithKey;
