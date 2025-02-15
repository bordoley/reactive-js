import { ObserverLike, PureDeferredObservableLike } from "../../concurrent.js";
import { Optional } from "../../functions.js";
export declare const SingleUseObservableLike_observer: unique symbol;
export interface SingleUseObservableLike<out T> extends PureDeferredObservableLike<T> {
    [SingleUseObservableLike_observer]: Optional<ObserverLike<T>>;
}
export declare const create: <T>() => SingleUseObservableLike<T>;
