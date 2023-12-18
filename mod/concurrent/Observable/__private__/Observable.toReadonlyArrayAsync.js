/// <reference types="./Observable.toReadonlyArrayAsync.d.ts" />

import { pipe, pipeAsync } from "../../../functions.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";
import Observable_isRunnable from "./Observable.isRunnable.js";
import Observable_toReadonlyArray from "./Observable.toReadonlyArray.js";
const Observable_toReadonlyArrayAsync = (schedulerOrNone, options) => async (observable) => {
    if (Observable_isRunnable(observable)) {
        // Add a microtask queue hop, so that the evaluation occurs asynchronously.
        await Promise.resolve();
        return pipe(observable, Observable_toReadonlyArray());
    }
    else {
        const result = await pipeAsync(observable, Observable_buffer(), Observable_firstAsync(schedulerOrNone, options));
        return result ?? [];
    }
};
export default Observable_toReadonlyArrayAsync;
