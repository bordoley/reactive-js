import { QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../types.js";
export default class BackPressureError extends Error {
    readonly [QueueableLike_capacity]: number;
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    constructor(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]);
}
