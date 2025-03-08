import { PureDeferredObservableLike } from "../../computations.js";
import { Optional } from "../../functions.js";
import { ObserverLike } from "../../utils.js";
export declare const SingleUseObservableLike_observer: unique symbol;
export interface SingleUseObservableLike<out T> extends PureDeferredObservableLike<T> {
    [SingleUseObservableLike_observer]: Optional<ObserverLike<T>>;
}
export declare const create: <T>() => SingleUseObservableLike<T>;
