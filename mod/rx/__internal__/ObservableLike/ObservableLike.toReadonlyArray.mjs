/// <reference types="./ObservableLike.toReadonlyArray.d.ts" />
import { pipe, isSome, raise } from '../../../functions.mjs';
import ContinuationLike__run from '../../../scheduling/__internal__/ContinuationLike/ContinuationLike.run.mjs';
import VirtualTimeSchedulerLike__create from '../../../scheduling/__internal__/VirtualTimeSchedulerLike/VirtualTimeSchedulerLike.create.mjs';
import DisposableLike__getError from '../../../util/__internal__/DisposableLike/DisposableLike.getError.mjs';
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
        const error = DisposableLike__getError(subscription);
        return isSome(error) ? raise(error) : result;
    }
    else {
        return [];
    }
};

export { ObservableLike__toReadonlyArray as default };
