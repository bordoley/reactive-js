import { ObserverLike } from "../../types.js";
declare const Observer_createPairwiseObserver: <T>(delegate: ObserverLike<readonly [T, T]>) => ObserverLike<T>;
export default Observer_createPairwiseObserver;
