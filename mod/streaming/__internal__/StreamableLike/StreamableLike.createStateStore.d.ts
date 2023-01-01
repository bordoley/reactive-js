import { StreamableLike, StreamLike } from "../../../streaming.mjs";
import { Factory, Equality, Updater } from "../../../functions.mjs";
declare const StreamableLike__createStateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<Updater<T>, T, StreamLike<Updater<T>, T>>;
export { StreamableLike__createStateStore as default };
