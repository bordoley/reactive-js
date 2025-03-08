/// <reference types="./Observable.toReadonlyArrayAsync.d.ts" />

import { isNone, isSome, pipeAsync } from "../../../functions.js";
import * as HostScheduler from "../../../utils/HostScheduler.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";
const Observable_toReadonlyArrayAsync = (schedulerOrOptions, maybeOptions) => {
    const { scheduler, options } = isNone(schedulerOrOptions) || isSome(schedulerOrOptions.capacity)
        ? {
            // FIXME: Might want to create a scheduler and use it instead
            scheduler: HostScheduler.get(),
            options: schedulerOrOptions,
        }
        : {
            scheduler: schedulerOrOptions,
            options: maybeOptions,
        };
    return async (observable) => {
        const result = await pipeAsync(observable, Observable_buffer(), Observable_firstAsync(scheduler, options));
        return result ?? [];
    };
};
export default Observable_toReadonlyArrayAsync;
