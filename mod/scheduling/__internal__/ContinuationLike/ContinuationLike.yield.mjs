/// <reference types="./ContinuationLike.yield.d.ts" />
import { getDelay } from '../../../__internal__/scheduling/SchedulerLike.options.mjs';
import { pipe, newInstance, raise } from '../../../functions.mjs';
import { get } from '../CurrentScheduler.mjs';
import shouldYield from '../SchedulerLike/SchedulerLike.shouldYield.mjs';
import YieldError from '../YieldError.mjs';

const yield_ = (options) => {
    const delay = getDelay(options);
    const scheduler = get();
    if (delay > 0 || shouldYield(scheduler)) {
        pipe(newInstance(YieldError, delay), raise);
    }
};

export { yield_ as default };
