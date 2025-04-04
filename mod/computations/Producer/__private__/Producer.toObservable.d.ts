import { ProducerLike } from "../../../computations.js";
import { BackpressureStrategy, ObserverLike } from "../../../utils.js";
declare const Producer_toObservable: <T>(config?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
}) => (producer: ProducerLike<T>) => import("../../../computations.js").DeferredEventSourceLike<T, ObserverLike<T>>;
export default Producer_toObservable;
