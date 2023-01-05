/// <reference types="./AsyncEnumerableLike.toObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObserverLike__getScheduler from '../../../rx/__internal__/ObserverLike/ObserverLike.getScheduler.mjs';
import ReactiveContainerLike__sinkInto from '../../../rx/__internal__/ReactiveContainerLike/ReactiveContainerLike.sinkInto.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import DispatcherLike__dispatch from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatch.mjs';
import StreamableLike__stream from '../../../streaming/__internal__/StreamableLike/StreamableLike.stream.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';

const AsyncEnumerable__toObservable = () => enumerable => RunnableObservableLike__create(observer => {
    const enumerator = pipe(enumerable, StreamableLike__stream(ObserverLike__getScheduler(observer)), DisposableLike__addTo(observer));
    pipe(enumerator, ObservableLike__forEach(_ => {
        pipe(enumerator, DispatcherLike__dispatch(none));
    }), ObservableLike__onSubscribe(() => {
        pipe(enumerator, DispatcherLike__dispatch(none));
    }), ReactiveContainerLike__sinkInto(observer));
});

export { AsyncEnumerable__toObservable as default };
