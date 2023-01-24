/// <reference types="./FlowableLike.toObservable.d.ts" />
import ContainerLike__ignoreElements from '../../../containers/__internal__/ContainerLike/ContainerLike.ignoreElements.mjs';
import ContainerLike__startWith from '../../../containers/__internal__/ContainerLike/ContainerLike.startWith.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import ObservableLike__concat from '../../../rx/__internal__/ObservableLike/ObservableLike.concat.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__fromArray from '../../../rx/__internal__/ObservableLike/ObservableLike.fromArray.mjs';
import ObservableLike__keep from '../../../rx/__internal__/ObservableLike/ObservableLike.keep.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import DispatcherLike__dispatchTo from '../../../scheduling/__internal__/DispatcherLike/DispatcherLike.dispatchTo.mjs';
import DisposableLike__addTo from '../../../util/__internal__/DisposableLike/DisposableLike.addTo.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';
import StreamLike__sourceFrom from '../StreamLike/StreamLike.sourceFrom.mjs';

const FlowableLike__toObservable = () => src => ObservableLike__create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(ObservableLike__forEach(DispatcherLike__dispatchTo(dispatcher)), ContainerLike__ignoreElements({ keep: ObservableLike__keep }), ContainerLike__startWith({
        fromArray: ObservableLike__fromArray,
        concat: ObservableLike__concat,
    }, "pause", "resume"), ObservableLike__onSubscribe(() => dispatcher));
    pipe(StreamLike__create(op, scheduler), StreamLike__sourceFrom(src), DisposableLike__addTo(observer));
});

export { FlowableLike__toObservable as default };
