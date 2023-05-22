import { Equality, Factory, Reducer } from "../../functions.js";
import { DeferredObservableLike } from "../../types.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => (obs: DeferredObservableLike<TAction>) => DeferredObservableLike<T>;
export default Observable_actionReducer;
