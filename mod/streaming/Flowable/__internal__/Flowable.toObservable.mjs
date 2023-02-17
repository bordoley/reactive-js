/// <reference types="./Flowable.toObservable.d.ts" />
import Container_ignoreElements from '../../../containers/Container/__internal__/Container.ignoreElements.mjs';
import Container_startWith from '../../../containers/Container/__internal__/Container.startWith.mjs';
import ReadonlyArray_toRunnableObservable from '../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnableObservable.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import Observable_concat from '../../../rx/Observable/__internal__/Observable.concat.mjs';
import Observable_create from '../../../rx/Observable/__internal__/Observable.create.mjs';
import Observable_forEach from '../../../rx/Observable/__internal__/Observable.forEach.mjs';
import Observable_keep from '../../../rx/Observable/__internal__/Observable.keep.mjs';
import Observable_onSubscribe from '../../../rx/Observable/__internal__/Observable.onSubscribe.mjs';
import Dispatcher_dispatchTo from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo.mjs';
import { FlowMode_pause, FlowMode_resume } from '../../../streaming.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Stream_create from '../../Stream/__internal__/Stream.create.mjs';
import Stream_sourceFrom from '../../Stream/__internal__/Stream.sourceFrom.mjs';

const Flowable_toObservable = () => src => Observable_create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(Observable_forEach(Dispatcher_dispatchTo(dispatcher)), Container_ignoreElements({ keep: Observable_keep }), Container_startWith({
        fromReadonlyArray: ReadonlyArray_toRunnableObservable,
        concat: Observable_concat,
    }, FlowMode_pause, FlowMode_resume), Observable_onSubscribe(() => dispatcher));
    pipe(Stream_create(op, scheduler), Stream_sourceFrom(src), Disposable_addTo(observer));
});

export { Flowable_toObservable as default };
