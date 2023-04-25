/// <reference types="./Enumerable.enumerateAsync.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, invoke, pipe } from "../../../functions.js";
import { ObservableLike_observe, } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import InteractiveObservable_create from "../../InteractiveObservableLike/__internal__/InteractiveObservable.create.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_create from "../../Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_map from "../../Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../Observable/__internal__/Observable.takeWhile.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_enumerateAsync = (scheduler, options) => {
    const { delay = 0, ...ixOptions } = options ?? {};
    return (enumerable) => InteractiveObservable_create((observable) => Observable_create(observer => {
        const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_addTo(observer));
        pipe(observable, Observable_forEach(bindMethod(enumerator, EnumeratorLike_move)), Observable_takeWhile(_ => enumerator[EnumeratorLike_hasCurrent]), delay > 0
            ? Observable_concatMap(_ => pipe(enumerator[EnumeratorLike_current], Optional_toObservable({ delay })))
            : Observable_map(_ => enumerator[EnumeratorLike_current]), invoke(ObservableLike_observe, observer));
    }), scheduler, ixOptions);
};
export default Enumerable_enumerateAsync;
