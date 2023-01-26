/// <reference types="./AsyncEnumerable.toObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import Observable$forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable$onSubscribe from '../../../rx/__internal__/Observable/Observable.onSubscribe.mjs';
import Observer$getScheduler from '../../../rx/__internal__/Observer/Observer.getScheduler.mjs';
import ReactiveContainer$sinkInto from '../../../rx/__internal__/ReactiveContainer/ReactiveContainer.sinkInto.mjs';
import RunnableObservable$create from '../../../rx/__internal__/RunnableObservable/RunnableObservable.create.mjs';
import Dispatcher$dispatch from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatch.mjs';
import Streamable$stream from '../../../streaming/__internal__/Streamable/Streamable.stream.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';

const AsyncEnumerable$toObservable = () => enumerable => RunnableObservable$create(observer => {
    const enumerator = pipe(enumerable, Streamable$stream(Observer$getScheduler(observer)), Disposable$addTo(observer));
    pipe(enumerator, Observable$forEach(_ => {
        pipe(enumerator, Dispatcher$dispatch(none));
    }), Observable$onSubscribe(() => {
        pipe(enumerator, Dispatcher$dispatch(none));
    }), ReactiveContainer$sinkInto(observer));
});

export { AsyncEnumerable$toObservable as default };
