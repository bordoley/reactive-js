import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1 } from "../../functions.js";
import { BackpressureStrategy, FlowControllerEnumeratorLike, SinkLike } from "../../utils.js";
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: SinkLike<T>) => SinkLike<T>;
export declare const createQueueSink: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => SinkLike<T> & FlowControllerEnumeratorLike<T>;
export declare const toLiftedSink: <T>() => Function1<SinkLike<T>, LiftedSinkLike<SinkLike<T>, T>>;
