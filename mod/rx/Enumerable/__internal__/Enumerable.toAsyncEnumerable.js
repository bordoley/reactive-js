/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />

import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../containers.js";
import Optional_toObservable from "../../../containers/Optional/__internal__/Optional.toObservable.js";
import { bindMethod, invoke, pipe } from "../../../functions.js";
import { ObservableLike_observe, } from "../../../rx.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import { StreamableLike_isEnumerable, StreamableLike_isInteractive, StreamableLike_isRunnable, } from "../../../streaming.js";
import Streamable_createWithConfig from "../../../streaming/Streamable/__internal__/Streamable.createWithConfig.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
const Enumerable_toAsyncEnumerable = 
/*@__PURE__*/
(options) => (enumerable) => {
    const { delay = 0 } = options ?? {};
    return Streamable_createWithConfig(observable => Observable_create(observer => {
        const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_addTo(observer));
        pipe(observable, Observable_forEach(bindMethod(enumerator, EnumeratorLike_move)), Observable_takeWhile(_ => enumerator[EnumeratorLike_hasCurrent]), delay > 0
            ? Observable_concatMap(_ => pipe(enumerator[EnumeratorLike_current], Optional_toObservable({ delay })))
            : Observable_map(_ => enumerator[EnumeratorLike_current]), invoke(ObservableLike_observe, observer));
    }), {
        [StreamableLike_isEnumerable]: delay <= 0,
        [StreamableLike_isInteractive]: true,
        [StreamableLike_isRunnable]: true,
    });
};
export default Enumerable_toAsyncEnumerable;
