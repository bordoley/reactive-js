/// <reference types="./Flowable.toObservable.d.ts" />
import Container$ignoreElements from '../../../containers/__internal__/Container/Container.ignoreElements.mjs';
import Container$startWith from '../../../containers/__internal__/Container/Container.startWith.mjs';
import { compose, pipe } from '../../../functions.mjs';
import { ObserverLike_dispatcher, ObserverLike_scheduler } from '../../../rx.mjs';
import Observable$concat from '../../../rx/__internal__/Observable/Observable.concat.mjs';
import Observable$create from '../../../rx/__internal__/Observable/Observable.create.mjs';
import Observable$forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable$fromArray from '../../../rx/__internal__/Observable/Observable.fromArray.mjs';
import Observable$keep from '../../../rx/__internal__/Observable/Observable.keep.mjs';
import Observable$onSubscribe from '../../../rx/__internal__/Observable/Observable.onSubscribe.mjs';
import Dispatcher$dispatchTo from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Stream$create from '../Stream/Stream.create.mjs';
import Stream$sourceFrom from '../Stream/Stream.sourceFrom.mjs';

const Flowable$toObservable = () => src => Observable$create(observer => {
    const { [ObserverLike_dispatcher]: dispatcher, [ObserverLike_scheduler]: scheduler, } = observer;
    const op = compose(Observable$forEach(Dispatcher$dispatchTo(dispatcher)), Container$ignoreElements({ keep: Observable$keep }), Container$startWith({
        fromArray: Observable$fromArray,
        concat: Observable$concat,
    }, "pause", "resume"), Observable$onSubscribe(() => dispatcher));
    pipe(Stream$create(op, scheduler), Stream$sourceFrom(src), Disposable$addTo(observer));
});

export { Flowable$toObservable as default };
