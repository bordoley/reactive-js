/// <reference types="./Observable.flatMapIterable.d.ts" />

import EnumerableWithSideEffects_concatAll from "../../EnumerableWithSideEffects/__internal__/EnumerableWithSideEffects.concatAll.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Runnable_concatMap from "../../Runnable/__internal__/Runnable.concatMap.js";
import { compose, pipe } from "../../functions.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_map from "./Observable.map.js";
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Iterable_toObservable());
    return (observable) => Observable_isEnumerable(observable)
        ? pipe(observable, Observable_map(mapper), EnumerableWithSideEffects_concatAll())
        : Observable_isRunnable(observable)
            ? pipe(observable, Runnable_concatMap(mapper))
            : pipe(observable, Observable_concatMap(mapper));
});
export default Observable_flatMapIterable;
