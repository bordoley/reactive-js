/// <reference types="./Streamable.sinkInto.d.ts" />
import Container_ignoreElements from '../../../containers/Container/__internal__/Container.ignoreElements.mjs';
import { pipe } from '../../../functions.mjs';
import Observable_forEach from '../../../rx/Observable/__internal__/Observable.forEach.mjs';
import Observable_keep from '../../../rx/Observable/__internal__/Observable.keep.mjs';
import Observable_merge from '../../../rx/Observable/__internal__/Observable.merge.mjs';
import Observable_onSubscribe from '../../../rx/Observable/__internal__/Observable.onSubscribe.mjs';
import Observable_subscribe from '../../../rx/Observable/__internal__/Observable.subscribe.mjs';
import { DispatcherLike_scheduler } from '../../../scheduling.mjs';
import Dispatcher_dispatchTo from '../../../scheduling/Dispatcher/__internal__/Dispatcher.dispatchTo.mjs';
import Disposable_add from '../../../util/Disposable/__internal__/Disposable.add.mjs';
import Disposable_addTo from '../../../util/Disposable/__internal__/Disposable.addTo.mjs';
import Streamable_stream from './Streamable.stream.mjs';

const Streamable_sinkInto = (dest) => (src) => {
    const { [DispatcherLike_scheduler]: scheduler } = dest;
    const srcStream = pipe(src, Streamable_stream(scheduler));
    pipe(Observable_merge(pipe(srcStream, Observable_forEach(Dispatcher_dispatchTo(dest)), Container_ignoreElements({ keep: Observable_keep }), Observable_onSubscribe(() => dest)), pipe(dest, Observable_forEach(Dispatcher_dispatchTo(srcStream)), Container_ignoreElements({ keep: Observable_keep }))), Container_ignoreElements({ keep: Observable_keep }), Observable_subscribe(scheduler), Disposable_addTo(dest), Disposable_add(srcStream));
    return src;
};

export { Streamable_sinkInto as default };
