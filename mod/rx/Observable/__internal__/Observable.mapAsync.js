/// <reference types="./Observable.mapAsync.d.ts" />

import Promiseable_toObservable from "../../../containers/Promiseable/__internal__/Promiseable.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_switchMap from "./Observable.switchMap.js";
const Observable_mapAsync = (f) => Observable_switchMap((a) => pipe(a, f, Promiseable_toObservable()));
export default Observable_mapAsync;
