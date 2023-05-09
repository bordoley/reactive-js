import { ObserverLike, QueueableLike } from "../../types.js";
declare const Observer_createEnqueueObserver: <T>(delegate: ObserverLike<T>, queue: QueueableLike<T>) => ObserverLike<T>;
export default Observer_createEnqueueObserver;
