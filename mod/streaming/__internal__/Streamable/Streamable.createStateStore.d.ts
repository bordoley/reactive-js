import { StreamableLike, StreamLike } from "../../../streaming.js";
import { Factory, Equality, Updater } from "../../../functions.js";
declare const Streamable$createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T, StreamLike<Updater<T>, T>>;
export { Streamable$createStateStore as default };
