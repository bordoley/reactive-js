/// <reference types="./AsyncEnumerable.toObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import Observable_forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable_onSubscribe from '../../../rx/__internal__/Observable/Observable.onSubscribe.mjs';
import Observer_getScheduler from '../../../rx/__internal__/Observer/Observer.getScheduler.mjs';
import ReactiveContainer_sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import RunnableObservable_create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Dispatcher_dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Streamable_stream from '../../../streaming/__internal__/Streamable/Streamable.stream.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';

const AsyncEnumerable_toObservable = () => enumerable => RunnableObservable_create(observer => {
    const enumerator = pipe(enumerable, Streamable_stream(Observer_getScheduler(observer)), Disposable_addTo(observer));
    pipe(enumerator, Observable_forEach(_ => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), Observable_onSubscribe(() => {
        pipe(enumerator, Dispatcher_dispatch(none));
    }), ReactiveContainer_sinkInto(observer));
});

export { AsyncEnumerable_toObservable as default };
