import { BufferLike_capacity, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
declare const Observer_createBackpressureObserver: <T>(delegate: ObserverLike<T>, config: {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
}) => ObserverLike<T>;
export default Observer_createBackpressureObserver;
