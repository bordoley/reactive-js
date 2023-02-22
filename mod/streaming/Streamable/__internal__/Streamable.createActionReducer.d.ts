import { Equality, Factory, Reducer } from "../../../functions.js";
import { StreamableLike } from "../../../streaming.js";
declare const Streamable_createActionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => StreamableLike<TAction, T, import("../../../streaming.js").StreamLike<TAction, T>>;
export default Streamable_createActionReducer;
