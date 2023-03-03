/// <reference types="./Enumerable.toAsyncEnumerable.d.ts" />

import ReadonlyArray_toObservable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import { pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_map from "../../../rx/Observable/__internal__/Observable.map.js";
import Observable_takeWhile from "../../../rx/Observable/__internal__/Observable.takeWhile.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Enumerator_getCurrent from "../../../util/Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_hasCurrent from "../../../util/Enumerator/__internal__/Enumerator.hasCurrent.js";
import Enumerator_move from "../../../util/Enumerator/__internal__/Enumerator.move.js";
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
        Enumerator_move(enumerator);
    }), Observable_takeWhile(_ => Enumerator_hasCurrent(enumerator)), delay > 0
        ? Observable_concatMap(_ => pipe([Enumerator_getCurrent(enumerator)], ReadonlyArray_toObservable({
            delay,
            delayStart: true,
        })))
        : Observable_map(_ => Enumerator_getCurrent(enumerator)), Observable_observeWith(observer));
}));
export default Enumerable_toAsyncEnumerable;
