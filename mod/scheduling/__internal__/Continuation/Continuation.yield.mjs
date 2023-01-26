/// <reference types="./Continuation.yield.d.ts" />
import { newInstance } from '../../../functions.mjs';
import { get } from '../CurrentScheduler.mjs';
import { getDelay } from '../Scheduler.options.mjs';
import Scheduler$shouldYield from '../Scheduler/Scheduler.shouldYield.mjs';
import YieldError from '../YieldError.mjs';

const Continuation$yield_ = (options) => {
    const delay = getDelay(options);
    const scheduler = get();
    if (delay > 0 || Scheduler$shouldYield(scheduler)) {
        throw newInstance(YieldError, delay);
    }
};

export { Continuation$yield_ as default };
