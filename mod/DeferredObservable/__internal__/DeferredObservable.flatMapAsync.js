/// <reference types="./DeferredObservable.flatMapAsync.d.ts" />

import Observable_fromAsyncFactory from "../../Observable/__internal__/Observable.fromAsyncFactory.js";
import { pipe } from "../../functions.js";
import DeferredObservable_concatMap from "./DeferredObservable.concatMap.js";
const DeferredObservable_flatMapAsync = (f) => DeferredObservable_concatMap((a) => pipe((abortSignal) => f(a, abortSignal), Observable_fromAsyncFactory()));
export default DeferredObservable_flatMapAsync;
