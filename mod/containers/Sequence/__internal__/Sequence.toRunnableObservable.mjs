/// <reference types="./Sequence.toRunnableObservable.d.ts" />
import { SequenceLike_data, SequenceLike_next } from '../../../containers.mjs';
import { isSome, pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import EnumerableObservable_create from '../../../rx/EnumerableObservable/__internal__/EnumerableObservable.create.mjs';
import Observer_schedule from '../../../rx/Observer/__internal__/Observer.schedule.mjs';
import RunnableObservable_create from '../../../rx/RunnableObservable/__internal__/RunnableObservable.create.mjs';
import { __yield } from '../../../scheduling/Continuation/effects.mjs';
import { hasDelay } from '../../../scheduling/__internal__/Scheduler.options.mjs';
import { DisposableLike_isDisposed } from '../../../util.mjs';
import Disposable_dispose from '../../../util/Disposable/__internal__/Disposable.dispose.mjs';

const Sequence_toRunnableObservable = options => (seq) => {
    const { delay = 0, delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let next = seq();
        const continuation = () => {
            while (!observer[DisposableLike_isDisposed] && isSome(next)) {
                observer[SinkLike_notify](next[SequenceLike_data]);
                next = next[SequenceLike_next]();
                if (isSome(next)) {
                    __yield(delay);
                }
            }
            pipe(observer, Disposable_dispose());
        };
        pipe(observer, Observer_schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservable_create(onSink)
        : EnumerableObservable_create(onSink);
};

export { Sequence_toRunnableObservable as default };
