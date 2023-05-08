import { StreamableLike } from "../../../core.js";
import { Equality, Factory, Updater } from "../../../functions.js";
declare const Streamable_createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T, import("../../../core.js").StreamLike<Updater<T>, T>>;
export default Streamable_createStateStore;
