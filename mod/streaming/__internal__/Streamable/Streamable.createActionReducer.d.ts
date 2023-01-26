import { StreamableLike, StreamLike } from "../../../streaming.js";
import { Reducer, Factory, Equality } from "../../../functions.js";
declare const Streamable$createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<TAction, T, StreamLike<TAction, T>>;
export { Streamable$createActionReducer as default };
