/// <reference types="./SharedObservable.flatMapAsync.d.ts" />

import Observable_fromAsyncFactory from "../../Observable/__internal__/Observable.fromAsyncFactory.js";
import { pipe } from "../../functions.js";
import SharedObservable_concatMap from "./SharedObservable.concatMap.js";
const SharedObservable_flatMapAsync = (f) => SharedObservable_concatMap((a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory()));
export default SharedObservable_flatMapAsync;
