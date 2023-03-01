/// <reference types="./AsyncEnumerable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import EnumerableObservable_create from "../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observer_getScheduler from "../../../rx/Observer/__internal__/Observer.getScheduler.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import RunnableObservable_create from "../../../rx/RunnableObservable/__internal__/RunnableObservable.create.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Queue_push from "../../../util/Queue/__internal__/Queue.push.js";
import AsyncEnumerable_isEnumerable from "./AsyncEnumerable.isEnumerable.js";
import AsyncEnumerable_isRunnable from "./AsyncEnumerable.isRunnable.js";
const AsyncEnumerable_toObservable = () => enumerable => {
    const create = AsyncEnumerable_isEnumerable(enumerable)
        ? EnumerableObservable_create
        : AsyncEnumerable_isRunnable(enumerable)
            ? RunnableObservable_create
            : Observable_create;
    return create(observer => {
        const enumerator = pipe(enumerable, Streamable_stream(Observer_getScheduler(observer)), Disposable_addTo(observer));
        pipe(enumerator, Observable_forEach(_ => {
            pipe(enumerator, Queue_push(none));
        }), Observable_onSubscribe(() => {
            pipe(enumerator, Queue_push(none));
        }), ReactiveContainer_sinkInto(observer));
    });
};
export default AsyncEnumerable_toObservable;
