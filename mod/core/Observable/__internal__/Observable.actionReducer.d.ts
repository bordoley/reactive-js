import { Container, ObservableContainer } from "../../../core.js";
import { Equality, Factory, Reducer } from "../../../functions.js";
declare const Observable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Container.Operator<ObservableContainer, TAction, T>;
export default Observable_actionReducer;
