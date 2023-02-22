/// <reference types="./AsyncEnumerable.toObservable.d.ts" />

import { none, pipe } from "../../../functions.js";
import Observable_create from "../../../rx/Observable/__internal__/Observable.create.js";
import Observable_forEach from "../../../rx/Observable/__internal__/Observable.forEach.js";
import Observable_onSubscribe from "../../../rx/Observable/__internal__/Observable.onSubscribe.js";
import Observer_getScheduler from "../../../rx/Observer/__internal__/Observer.getScheduler.js";
import ReactiveContainer_sinkInto from "../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.js";
import Dispatcher_dispatch from "../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.js";
import Streamable_stream from "../../../streaming/Streamable/__internal__/Streamable.stream.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
const AsyncEnumerable_toObservable = () => enumerable => Observable_create(observer => {
    const enumerator = pipe(enumerable, Streamable_stream(Observer_getScheduler(observer)), Disposable_addTo(observer));
    pipe(enumerator, Observable_forEach(_ => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), Observable_onSubscribe(() => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), ReactiveContainer_sinkInto(observer));
});
export default AsyncEnumerable_toObservable;
