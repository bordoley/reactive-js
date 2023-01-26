/// <reference types="./Streamable.sinkInto.d.ts" />
import Container$ignoreElements from '../../../containers/__internal__/Container/Container.ignoreElements.mjs';
import { pipe } from '../../../functions.mjs';
import Observable$forEach from '../../../rx/__internal__/Observable/Observable.forEach.mjs';
import Observable$keep from '../../../rx/__internal__/Observable/Observable.keep.mjs';
import Observable$merge from '../../../rx/__internal__/Observable/Observable.merge.mjs';
import Observable$onSubscribe from '../../../rx/__internal__/Observable/Observable.onSubscribe.mjs';
import Observable$subscribe from '../../../rx/__internal__/Observable/Observable.subscribe.mjs';
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';
import Dispatcher$dispatchTo from '../../../scheduling/__internal__/Dispatcher/Dispatcher.dispatchTo.mjs';
import Disposable$add from '../../../util/__internal__/Disposable/Disposable.add.mjs';
import Disposable$addTo from '../../../util/__internal__/Disposable/Disposable.addTo.mjs';
import Streamable$stream from './Streamable.stream.mjs';

const Streamable$sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, Streamable$stream(scheduler));
    pipe(Observable$merge(pipe(srcStream, Observable$forEach(Dispatcher$dispatchTo(dest)), Container$ignoreElements({ keep: Observable$keep }), Observable$onSubscribe(() => dest)), pipe(dest, Observable$forEach(Dispatcher$dispatchTo(srcStream)), Container$ignoreElements({ keep: Observable$keep }))), Container$ignoreElements({ keep: Observable$keep }), Observable$subscribe(scheduler), Disposable$addTo(dest), Disposable$add(srcStream));
    return src;
};

export { Streamable$sinkInto as default };
