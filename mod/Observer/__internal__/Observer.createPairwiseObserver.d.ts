import { Tuple2 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const Observer_createPairwiseObserver: <T>(delegate: ObserverLike<Tuple2<T, T>>) => ObserverLike<T>;
export default Observer_createPairwiseObserver;
