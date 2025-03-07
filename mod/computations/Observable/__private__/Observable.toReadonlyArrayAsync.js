/// <reference types="./Observable.toReadonlyArrayAsync.d.ts" />

import { pipeAsync } from "../../../functions.js";
import Observable_buffer from "./Observable.buffer.js";
import Observable_firstAsync from "./Observable.firstAsync.js";
const Observable_toReadonlyArrayAsync = (scheduler, options) => async (observable) => {
    const result = await pipeAsync(observable, Observable_buffer(), Observable_firstAsync(scheduler, options));
    return result ?? [];
};
export default Observable_toReadonlyArrayAsync;
