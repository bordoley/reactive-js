import { BackpressureStrategy, FlowControllerQueueLike } from "../../utils.js";
export declare const create: <T>(options?: {
    backpressureStrategy?: BackpressureStrategy;
    capacity?: number;
}) => FlowControllerQueueLike<T>;
