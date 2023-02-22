import { Equality, Factory, Updater } from "../../../functions.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T, import("../../../streaming.js").StreamLike<Updater<T>, T>>;
export default Streamable_createStateStore;
