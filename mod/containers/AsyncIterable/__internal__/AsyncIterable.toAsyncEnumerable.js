/// <reference types="./AsyncIterable.toAsyncEnumerable.d.ts" />

import { error, pipe, returns } from "../../../functions.js";
import { DispatcherLike_complete, DispatcherLike_scheduler, } from "../../../rx.js";
import Observable_concatMap from "../../../rx/Observable/__internal__/Observable.concatMap.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_subscribe from "../../../rx/Observable/__internal__/Observable.subscribe.js";
import Streamable_createLifted from "../../../streaming/Streamable/__internal__/Streamable.createLifted.js";
import { DisposableLike_dispose, QueueableLike_push } from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Promiseable_toObservable from "../../Promiseable/__internal__/Promiseable.toObservable.js";
const AsyncIterable_toAsyncEnumerable = 
/*@__PURE__*/ returns((iterable) => Streamable_createLifted(observable => Observable_create(observer => {
    const iterator = iterable[Symbol.asyncIterator]();
    pipe(observable, Observable_concatMap(_ => pipe(iterator.next(), Promiseable_toObservable())), Observable_forEach(result => {
        try {
            if (!result.done) {
                observer[QueueableLike_push](result.value);
            }
            else {
                observer[DispatcherLike_complete]();
            }
        }
        catch (e) {
            observer[DisposableLike_dispose](error(e));
        }
    }), Observable_subscribe(observer[DispatcherLike_scheduler]), Disposable_addTo(observer), Disposable_onComplete(() => observer[DispatcherLike_complete]()));
}), true, false, false));
export default AsyncIterable_toAsyncEnumerable;
