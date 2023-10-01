import { ObserverLike } from "../../../concurrent.js";
declare const Observer_createBufferObserver: <T>(delegate: ObserverLike<readonly T[]>, count: number) => ObserverLike<T>;
export default Observer_createBufferObserver;
