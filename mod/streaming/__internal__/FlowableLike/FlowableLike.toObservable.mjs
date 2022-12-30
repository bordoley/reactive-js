/// <reference types="./FlowableLike.toObservable.d.ts" />
import { ignoreElements, startWith } from '../../../containers/ContainerLike.mjs';
import { toObservable as toObservable$1 } from '../../../containers/ReadonlyArrayLike.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import { E as create, f as forEach, x as keepT, S as concatT, o as onSubscribe, T as create$1 } from '../../../ObservableLike-ca8b1474.mjs';
import { dispatchTo } from '../../../scheduling/DispatcherLike.mjs';
import { sourceFrom } from '../../StreamLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';

const toObservable = () => src => create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(forEach(dispatchTo(dispatcher)), ignoreElements(keepT), startWith({
        fromArray: toObservable$1,
        ...concatT,
    }, "pause", "resume"), onSubscribe(() => dispatcher));
    pipe(create$1(op, scheduler), sourceFrom(src), addTo(observer));
});

export { toObservable as default };
