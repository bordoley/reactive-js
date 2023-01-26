/// <reference types="./Flowable.toObservable.d.ts" />
import Container_ignoreElements from '../../../containers/__internal__/Container/Container.ignoreElements.mjs';
import Container_startWith from '../../../containers/__internal__/Container/Container.startWith.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import Observable_concat from '../../../rx/__internal__/Observable/Observable.concat.mjs';
import Observable_create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable_forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable_fromArray from '../../../rx/__internal__/Observable/Observable.fromArray.mjs';
import Observable_keep from '../../../rx/__internal__/Observable/Observable.keep.mjs';
import Observable_onSubscribe from '../../../rx/__internal__/Observable/Observable.onSubscribe.mjs';
import Dispatcher_dispatchTo from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Disposable_addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Stream_create from '../Stream/Stream.create.mjs';
import Stream_sourceFrom from '../Stream/Stream.sourceFrom.mjs';

const Flowable_toObservable = () => src => Observable_create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(Observable_forEach(Dispatcher_dispatchTo(dispatcher)), Container_ignoreElements({ keep: Observable_keep }), Container_startWith({
        fromArray: Observable_fromArray,
        concat: Observable_concat,
    }, "pause", "resume"), Observable_onSubscribe(() => dispatcher));
    pipe(Stream_create(op, scheduler), Stream_sourceFrom(src), Disposable_addTo(observer));
});

export { Flowable_toObservable as default };
