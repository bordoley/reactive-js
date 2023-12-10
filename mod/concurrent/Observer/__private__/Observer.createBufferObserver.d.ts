import { ObserverLike } from "../../../concurrent.js";
import { Optional } from "../../../functions.js";
declare const Observer_createBufferObserver: <T>(delegate: ObserverLike<readonly T[]>, count: Optional<number>) => ObserverLike<T>;
export default Observer_createBufferObserver;
