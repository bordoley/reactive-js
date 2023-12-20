import { ObservableLike } from "../../../concurrent.js";
import { Equality, Factory, Reducer } from "../../../functions.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => (obs: ObservableLike<TAction>) => import("../../../concurrent.js").DeferredObservableWithSideEffectsLike<T>;
export default Observable_actionReducer;
