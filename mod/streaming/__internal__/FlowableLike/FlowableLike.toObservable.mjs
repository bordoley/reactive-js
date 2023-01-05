/// <reference types="./FlowableLike.toObservable.d.ts" />
import { ignoreElements, startWith } from '../../../containers/ContainerLike.mjs';
import ReadonlyArrayLike__toRunnableObservable from '../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnableObservable.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import ObservableLike__concatT from '../../../rx/__internal__/ObservableLike/ObservableLike.concatT.mjs';
import ObservableLike__create from '../../../rx/__internal__/ObservableLike/ObservableLike.create.mjs';
import ObservableLike__forEach from '../../../rx/__internal__/ObservableLike/ObservableLike.forEach.mjs';
import ObservableLike__keepT from '../../../rx/__internal__/ObservableLike/ObservableLike.keepT.mjs';
import ObservableLike__onSubscribe from '../../../rx/__internal__/ObservableLike/ObservableLike.onSubscribe.mjs';
import { dispatchTo } from '../../../scheduling/DispatcherLike.mjs';
import { sourceFrom } from '../../StreamLike.mjs';
import { addTo } from '../../../util/DisposableLike.mjs';
import StreamLike__create from '../StreamLike/StreamLike.create.mjs';

const FlowableLike__toObservable = () => src => ObservableLike__create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(ObservableLike__forEach(dispatchTo(dispatcher)), ignoreElements(ObservableLike__keepT), startWith({
        fromArray: ReadonlyArrayLike__toRunnableObservable,
        ...ObservableLike__concatT,
    }, "pause", "resume"), ObservableLike__onSubscribe(() => dispatcher));
    pipe(StreamLike__create(op, scheduler), sourceFrom(src), addTo(observer));
});

export { FlowableLike__toObservable as default };
