import { Equality, Factory, Updater } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_createWriteThroughCache: <T>(initialState: Factory<T>, onInit: (initialValue: T) => ObservableLike<Updater<T>>, onChange: (oldValue: T, newValue: T) => ObservableLike<Updater<T>>, options?: {
    equality?: Equality<T> | undefined;
    throttleDuration?: number | undefined;
} | undefined) => StreamableLike<Updater<T>, T, import("../../../streaming.js").StreamLike<Updater<T>, T>>;
export default Streamable_createWriteThroughCache;
