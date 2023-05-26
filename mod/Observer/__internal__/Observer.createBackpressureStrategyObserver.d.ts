import { BufferLike_capacity, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy } from "../../types.js";
declare const Observer_createBackpressureObserver: <T>(delegate: ObserverLike<T>, config: Pick<QueueableLike, typeof BufferLike_capacity | typeof QueueableLike_backpressureStrategy>) => ObserverLike<T>;
export default Observer_createBackpressureObserver;
