import { ObservableOperator } from "../../Observable.js";
import { Equality, Factory, Reducer } from "../../functions.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ObservableOperator<TAction, T>;
export default Observable_actionReducer;
