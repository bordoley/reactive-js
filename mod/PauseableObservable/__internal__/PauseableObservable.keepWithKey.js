/// <reference types="./PauseableObservable.keepWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import PauseableObservable_keep from "./PauseableObservable.keep.js";
import PauseableObservable_pick from "./PauseableObservable.pick.js";
import PauseableObservable_scan from "./PauseableObservable.scan.js";
const PauseableObservable_keepWithKey = ((predicate) => (obs) => pipe(obs, PauseableObservable_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), PauseableObservable_keep(([cnt, v]) => predicate(v, cnt)), PauseableObservable_pick(1)));
export default PauseableObservable_keepWithKey;
