/// <reference types="./ObservableLike.toReadonlyArray.d.ts" />
import { pipe, isSome } from '../../../functions.mjs';
import ContinuationLike__run from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.run.mjs';
import VirtualTimeSchedulerLike__create from '../../../scheduling/__internal__/VirtualTimeSchedulerLike/VirtualTimeSchedulerLike.create.mjs';
import DisposableLike__getException from '../../../util/__internal__/DisposableLike/DisposableLike.getException.mjs';
import ObservableLike__forEach from './ObservableLike.forEach.mjs';
import ObservableLike__isRunnable from './ObservableLike.isRunnable.mjs';
import ObservableLike__subscribe from './ObservableLike.subscribe.mjs';

const ObservableLike__toReadonlyArray = (options = {}) => observable => {
    if (ObservableLike__isRunnable(observable)) {
        const { schedulerFactory = VirtualTimeSchedulerLike__create } = options;
        const scheduler = schedulerFactory();
        const result = [];
        const subscription = pipe(observable, ObservableLike__forEach(next => {
            result.push(next);
        }), ObservableLike__subscribe(scheduler));
        ContinuationLike__run(scheduler);
        const exception = DisposableLike__getException(subscription);
        if (isSome(exception)) {
            throw exception.cause;
        }
        return result;
    }
    else {
        return [];
    }
};

export { ObservableLike__toReadonlyArray as default };
