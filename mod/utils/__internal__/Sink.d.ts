import { LiftedSinkLike } from "../../computations/__internal__/LiftedSource.js";
import { Function1 } from "../../functions.js";
import { BackpressureStrategy, CollectionEnumeratorLike, SinkLike } from "../../utils.js";
import { DelegatingSinkLike } from "../__mixins__/DelegatingSinkMixin.js";
export declare const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(o: SinkLike<T>) => DelegatingSinkLike<T, SinkLike<T>>;
export declare const createQueueSink: <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => SinkLike<T> & CollectionEnumeratorLike<T>;
export declare const toLiftedSink: <T>() => Function1<SinkLike<T>, LiftedSinkLike<SinkLike<T>, T>>;
