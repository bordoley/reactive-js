/// <reference types="./AsyncEnumerable.toObservable.d.ts" />
import { pipe, none } from '../../../functions.mjs';
import { sinkInto } from '../../../rx/ReactiveContainerLike.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import ObserverLike__getScheduler from '../../../rx/__internal__/ObserverLike/ObserverLike.getScheduler.mjs';
import RunnableObservableLike__create from '../../../rx/__internal__/RunnableObservableLike/RunnableObservableLike.create.mjs';
import { dispatch } from '../../../scheduling/DispatcherLike.mjs';
import { stream } from '../../../streaming/StreamableLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';

const AsyncEnumerable__toObservable = () => enumerable => RunnableObservableLike__create(observer => {
    const enumerator = pipe(enumerable, stream(ObserverLike__getScheduler(observer)), addTo(observer));
    pipe(enumerator, ObservableLike__forEach(_ => {
        pipe(enumerator, dispatch(none));
    }), ObservableLike__onSubscribe(() => {
        pipe(enumerator, dispatch(none));
    }), sinkInto(observer));
});

export { AsyncEnumerable__toObservable as default };
