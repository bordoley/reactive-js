/// <reference types="./Observable.flatMapPromise.d.ts" />

import Promiseable_toObservable from "../../../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_concatMap from "./Observable.concatMap.js";
const Observable_flatMapPromise = (f) => Observable_concatMap((a) => pipe(a, f, Promiseable_toObservable()));
export default Observable_flatMapPromise;
