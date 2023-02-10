/// <reference types="./Continuation.yield.d.ts" />
import { newInstance } from '../../../functions.mjs';
import Scheduler_shouldYield from '../../Scheduler/__internal__/Scheduler.shouldYield.mjs';
import { get } from '../../__internal__/CurrentScheduler.mjs';
import { getDelay } from '../../__internal__/Scheduler.options.mjs';
import YieldError from '../../__internal__/YieldError.mjs';

const Continuation_yield_ = (options) => {
    const delay = getDelay(options);
    const scheduler = get();
    if (delay > 0 || Scheduler_shouldYield(scheduler)) {
        throw newInstance(YieldError, delay);
    }
};

export { Continuation_yield_ as default };
