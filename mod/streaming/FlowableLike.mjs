/// <reference types="./FlowableLike.d.ts" />
import { createStream } from '../__internal__/streaming/__internal__StreamLike.mjs';
import { ignoreElements, startWith } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { compose, pipe } from '../functions.mjs';
import { d as createObservable, f as addTo } from '../rx-31e22181.mjs';
import { forEach, keepT, concatT, onSubscribe } from '../rx/ObservableLike.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { sourceFrom } from './StreamLike.mjs';

const toObservable = () => src => createObservable(observer => {
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
