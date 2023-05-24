import { Equality, Factory, Reducer } from "../../functions.js";
import { DeferredObservableBaseLike } from "../../types.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => (obs: DeferredObservableBaseLike<TAction>) => import("../../types.js").DeferredObservableLike<T>;
export default Observable_actionReducer;
