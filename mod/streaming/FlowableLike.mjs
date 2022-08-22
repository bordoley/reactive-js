/// <reference types="./FlowableLike.d.ts" />
import { createStream } from '../__internal__/streaming/__internal__StreamLike.mjs';
import { ignoreElements, startWith } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { compose, pipe } from '../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../rx.mjs';
import { create, forEach, keepT, concatT, onSubscribe } from '../rx/ObservableLike.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { sourceFrom } from './StreamLike.mjs';
import { addTo } from '../util/DisposableLike.mjs';

const toObservable = () => src => create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(forEach(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({
        fromArray: toObservable$1,
        ...concatT,
    }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(createStream(op, scheduler), sourceFrom(src), addTo(observer));
});
const toObservableT = {
    toObservable,
};

export { toObservable, toObservableT };
