import { Equality, Factory, Reducer } from "../../functions.js";
import { Containers, DeferredObservableContainer } from "../../types.js";
declare const DeferredObservable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Containers.Operator<DeferredObservableContainer, TAction, T>;
export default DeferredObservable_actionReducer;
