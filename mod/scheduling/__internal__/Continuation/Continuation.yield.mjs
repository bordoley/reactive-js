/// <reference types="./Continuation.yield.d.ts" />
import { newInstance } from '../../../functions.mjs';
import { get } from '../CurrentScheduler.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler_shouldYield from '../Scheduler/Scheduler.shouldYield.mjs';
import YieldError from '../YieldError.mjs';

const Continuation_yield_ = (options) => {
    const delay = getDelay(options);
    const scheduler = get();
    if (delay > 0 || Scheduler_shouldYield(scheduler)) {
        throw newInstance(YieldError, delay);
    }
};

export { Continuation_yield_ as default };
