import { ContainerOperator } from "../../../containers.js";
import { Equality, Factory, Reducer } from "../../../functions.js";
import { ObservableLike } from "../../../rx.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, TAction, T>;
export default Observable_actionReducer;
