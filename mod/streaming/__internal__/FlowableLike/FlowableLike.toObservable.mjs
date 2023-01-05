/// <reference types="./FlowableLike.toObservable.d.ts" />
import ContainerLike__ignoreElements from '../../../containers/__internal__/ContainerLike/ContainerLike.ignoreElements.mjs';
import ContainerLike__startWith from '../../../containers/__internal__/ContainerLike/ContainerLike.startWith.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import ObservableLike__concatT from '../../../rx/__internal__/ObservableLike/ObservableLike.concatT.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__keepT from '../../../rx/__internal__/ObservableLike/ObservableLike.keepT.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import DispatcherLike__dispatchTo from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';
import StreamLike__sourceFrom from '../StreamLike/StreamLike.sourceFrom.mjs';

const FlowableLike__toObservable = () => src => ObservableLike__create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(ObservableLike__forEach(DispatcherLike__dispatchTo(dispatcher)), ContainerLike__ignoreElements(ObservableLike__keepT), ContainerLike__startWith({
        fromArray: ReadonlyArrayLike__toRunnableObservable,
        ...ObservableLike__concatT,
    }, "pause", "resume"), ObservableLike__onSubscribe(() => dispatcher));
    pipe(StreamLike__create(op, scheduler), StreamLike__sourceFrom(src), DisposableLike__addTo(observer));
});

export { FlowableLike__toObservable as default };
