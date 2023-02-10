/// <reference types="./AsyncEnumerable.toObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import Observable_forEach from '../../../rx/Observable/__internal__/Observable.forEach.mjs';
import Observable_onSubscribe from '../../../rx/Observable/__internal__/Observable.onSubscribe.mjs';
import Observer_getScheduler from '../../../rx/Observer/__internal__/Observer.getScheduler.mjs';
import ReactiveContainer_sinkInto from '../../../rx/ReactiveContainer/__internal__/ReactiveContainer.sinkInto.mjs';
import RunnableObservable_create from '../../../rx/RunnableObservable/__internal__/RunnableObservable.create.mjs';
import Dispatcher_dispatch from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatch.mjs';
import Streamable_stream from '../../../streaming/Streamable/__internal__/Streamable.stream.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';

const AsyncEnumerable_toObservable = () => enumerable => 
// FIXME: Fairly sketchy. Need a way to prove any async enumerable is actually pure.
RunnableObservable_create(observer => {
    const enumerator = pipe(enumerable, Streamable_stream(Observer_getScheduler(observer)), Disposable_addTo(observer));
    pipe(enumerator, Observable_forEach(_ => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), Observable_onSubscribe(() => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), ReactiveContainer_sinkInto(observer));
});

export { AsyncEnumerable_toObservable as default };
