/// <reference types="./FlowableLike.toObservable.d.ts" />
import { ignoreElements, startWith } from '../../../containers/ContainerLike.mjs';
import { toObservable } from '../../../containers/ReadonlyArrayLike.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import { create, forEach, keepT, concatT, onSubscribe } from '../../../rx/ObservableLike.mjs';
import { dispatchTo } from '../../../scheduling/DispatcherLike.mjs';
import { sourceFrom } from '../../StreamLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';

const FlowableLike__toObservable = () => src => create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(forEach(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({
        fromArray: toObservable,
        ...concatT,
    }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(StreamLike__create(op, scheduler), sourceFrom(src), addTo(observer));
});

export { FlowableLike__toObservable as default };
