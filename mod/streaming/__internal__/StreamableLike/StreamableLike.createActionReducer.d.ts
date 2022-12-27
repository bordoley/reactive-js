import { StreamableLike, StreamLike } from "../../../streaming.mjs";
import { Reducer, Factory, Equality } from "../../../functions.mjs";
declare const createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<TAction, T, StreamLike<TAction, T>>;
export { createActionReducer as default };
