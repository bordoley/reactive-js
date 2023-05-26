import { ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, QueueableLike_capacity } from "../../types.js";
declare const Observer_createBackpressureObserver: <T>(delegate: ObserverLike<T>, config: Pick<QueueableLike, typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy>) => ObserverLike<T>;
export default Observer_createBackpressureObserver;
