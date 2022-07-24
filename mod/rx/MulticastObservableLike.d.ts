import { DisposableLike } from "../util/DisposableLike.mjs";
import { ObservableLike } from "./ObservableLike.mjs";
declare const MulticastObservableLike_observerCount: unique symbol;
declare const MulticastObservableLike_replay: unique symbol;
interface MulticastObservableLike<T = unknown> extends ObservableLike<T>, DisposableLike {
    /**
     * The number of observers currently observing.
     */
    readonly [MulticastObservableLike_observerCount]: number;
    readonly [MulticastObservableLike_replay]: number;
}
declare const getObserverCount: (obs: {
    [MulticastObservableLike_observerCount]: number;
}) => number;
declare const getReplay: (obs: {
    [MulticastObservableLike_replay]: number;
}) => number;
export { MulticastObservableLike, MulticastObservableLike_observerCount, MulticastObservableLike_replay, getObserverCount, getReplay };
