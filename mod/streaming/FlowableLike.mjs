/// <reference types="./FlowableLike.d.ts" />
import { ignoreElements, startWith } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { compose, pipe } from '../functions.mjs';
import { createObservable } from '../rx.mjs';
import { forEach, keepT, concatT, onSubscribe } from '../rx/ObservableLike.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { createStream } from '../streaming.mjs';
import { sourceFrom } from './StreamLike.mjs';
import { addTo } from '../util/DisposableLike.mjs';

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
