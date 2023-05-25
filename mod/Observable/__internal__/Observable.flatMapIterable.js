/// <reference types="./Observable.flatMapIterable.d.ts" />

import EnumerableBase_create from "../../EnumerableBase/__internal__/EnumerableBase.create.js";
import Enumerator_concatAll from "../../Enumerator/__internal__/Enumerator.concatAll.js";
import Enumerator_map from "../../Enumerator/__internal__/Enumerator.map.js";
import Iterable_toObservable from "../../Iterable/__internal__/Iterable.toObservable.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Runnable_concatMap from "../../Runnable/__internal__/Runnable.concatMap.js";
import { compose, invoke, pipe, pipeLazy } from "../../functions.js";
import { EnumerableLike_enumerate, } from "../../types.js";
import Observable_enumerate from "./Observable.enumerate.js";
import Observable_isEnumerable from "./Observable.isEnumerable.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_map from "./Observable.map.js";
const EnumerableWithSideEffects_concatAll = () => (enumerable) => EnumerableBase_create(pipeLazy(enumerable, Observable_enumerate(), Enumerator_map(invoke(EnumerableLike_enumerate)), Enumerator_concatAll()), false);
const Observable_flatMapIterable = ((selector) => {
    const mapper = compose(selector, Iterable_toObservable());
    return (observable) => Observable_isEnumerable(observable)
        ? pipe(observable, Observable_map(mapper), EnumerableWithSideEffects_concatAll())
        : Observable_isRunnable(observable)
            ? pipe(observable, Runnable_concatMap(mapper))
            : pipe(observable, Observable_concatMap(mapper));
});
export default Observable_flatMapIterable;
