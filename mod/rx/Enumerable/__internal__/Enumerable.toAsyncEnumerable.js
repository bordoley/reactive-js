/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />

import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import { EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Observable_concatMap from "../../Observable/__internal__/Observable.concatMap.js";
import Observable_forEach from "../../Observable/__internal__/Observable.forEach.js";
import Observable_observeWith from "../../Observable/__internal__/Observable.observeWith.js";
import Enumerable_enumerate from "./Enumerable.enumerate.js";
// FIXME: Support delay argument, and expose it in Iterable_toAsyncEnumerable
const Enumerable_toAsyncEnumerable = 
/*@__PURE__*/
(options) => (enumerable) => Streamable_createLifted(observable => Observable_create(observer => {
    const { delay = 0 } = options !== null && options !== void 0 ? options : {};
    const enumerator = pipe(enumerable, Enumerable_enumerate(), Disposable_addTo(observer));
    pipe(observable, Observable_forEach(_ => {
        enumerator[EnumeratorLike_move]();
    }), Observable_takeWhile(_ => enumerator[EnumeratorLike_hasCurrent]), delay > 0
        ? Observable_concatMap(_ => pipe([enumerator[EnumeratorLike_current]], ReadonlyArray_toObservable({
            delay,
            delayStart: true,
        })))
        : Observable_map(_ => enumerator[EnumeratorLike_current]), Observable_observeWith(observer));
}), true, false, false);
export default Enumerable_toAsyncEnumerable;
