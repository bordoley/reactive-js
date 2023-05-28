/// <reference types="./PauseableObservable.mapWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import PauseableObservable_map from "./PauseableObservable.map.js";
import PauseableObservable_scan from "./PauseableObservable.scan.js";
const PauseableObservable_mapWithKey = ((mapper) => (obs) => pipe(obs, PauseableObservable_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), PauseableObservable_map(([cnt, v]) => mapper(v, cnt))));
export default PauseableObservable_mapWithKey;
