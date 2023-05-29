/// <reference types="./Observable.keepWithKey.d.ts" />

import { none, pipe, tuple } from "../../functions.js";
import Observable_keep from "./Observable.keep.js";
import Observable_pick from "./Observable.pick.js";
import Observable_scan from "./Observable.scan.js";
const Observable_keepWithKey = ((predicate) => (obs) => pipe(obs, Observable_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), Observable_keep(([cnt, v]) => predicate(v, cnt)), Observable_pick(1)));
export default Observable_keepWithKey;
