import { ObserverLike } from "../../types.js";
declare const Observer_createBufferObserver: <T>(delegate: ObserverLike<readonly T[]>, count: number) => ObserverLike<T>;
export default Observer_createBufferObserver;
