import { ObserverLike, QueueableLike } from "../../../core.js";
declare const Observer_createEnqueueObserver: <T>(delegate: ObserverLike<T>, queue: QueueableLike<T>) => ObserverLike<T>;
export default Observer_createEnqueueObserver;
