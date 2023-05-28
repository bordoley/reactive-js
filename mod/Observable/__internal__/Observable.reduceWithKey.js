/// <reference types="./Observable.reduceWithKey.d.ts" />

import { none, pipe, tuple, } from "../../functions.js";
import Observable_reduce from "./Observable.reduce.js";
import Observable_scan from "./Observable.scan.js";
const Observable_reduceWithKey = ((reducer, initialValue) => (obs) => pipe(obs, Observable_scan(([cnt, _], next) => tuple(cnt + 1, next), () => tuple(-1, none)), Observable_reduce((acc, [cnt, v]) => reducer(acc, v, cnt), initialValue)));
export default Observable_reduceWithKey;
