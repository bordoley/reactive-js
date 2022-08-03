/// <reference types="./FlowableLike.d.ts" />
import { ignoreElements, startWith } from '../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../containers/ReadonlyArrayLike.mjs';
import { compose, returns, pipe } from '../functions.mjs';
import { createHotObservable } from '../rx.mjs';
import { keepT, concatT } from '../rx/HotObservableLike.mjs';
import { forEach, toHotObservable, onSubscribe } from '../rx/ObservableLike.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../scheduling.mjs';
import { dispatchTo } from '../scheduling/DispatcherLike.mjs';
import { createStream } from '../streaming.mjs';
import { sourceFrom } from './StreamLike.mjs';
import '../util/DisposableLike.mjs';
import { addTo } from '../__internal__/util/DisposableLikeInternal.mjs';

const toObservable = () => src => createHotObservable(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(forEach(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({
        fromArray: returns(compose(toObservable$1(), toHotObservable())),
        ...concatT,
    }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(createStream(op, scheduler), sourceFrom(src), addTo(observer));
});
const toObservableT = {
    toObservable,
};

export { toObservable, toObservableT };
