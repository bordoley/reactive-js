/// <reference types="./ObservableLike.generate.d.ts" />
import { hasDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, none } from '../../../functions.mjs';
import { SinkLike_notify } from '../../../rx.mjs';
import ContinuationLike__yield_ from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield.mjs';
import DisposableLike__isDisposed from '../../../util/__internal__/DisposableLike/DisposableLike.isDisposed.mjs';
import { schedule } from '../../ObserverLike.mjs';
import EnumerableObservableLike__create from '../EnumerableObservableLike/EnumerableObservableLike.create.mjs';
import RunnableObservableLike__create from '../RunnableObservableLike/RunnableObservableLike.create.mjs';

const ObservableLike__generate = (generator, initialValue, options) => {
    const { delayStart = false } = options !== null && options !== void 0 ? options : {};
    const onSink = (observer) => {
        let acc = initialValue();
        const continuation = () => {
            while (!DisposableLike__isDisposed(observer)) {
                acc = generator(acc);
                observer[SinkLike_notify](acc);
                ContinuationLike__yield_(options);
            }
        };
        pipe(observer, schedule(continuation, delayStart ? options : none));
    };
    return hasDelay(options)
        ? RunnableObservableLike__create(onSink)
        : EnumerableObservableLike__create(onSink);
};

export { ObservableLike__generate as default };
