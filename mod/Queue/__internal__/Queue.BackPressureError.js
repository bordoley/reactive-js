/// <reference types="./Queue.BackPressureError.d.ts" />

import { QueueableLike_backpressureStrategy, QueueableLike_capacity, } from "../../types.js";
export default class BackPressureError extends Error {
    [QueueableLike_capacity];
    [QueueableLike_backpressureStrategy];
    constructor(capacity, backpressureStrategy) {
        super();
        this[QueueableLike_capacity] = capacity;
        this[QueueableLike_backpressureStrategy] = backpressureStrategy;
    }
}
