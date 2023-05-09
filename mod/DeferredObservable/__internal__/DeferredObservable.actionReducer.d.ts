import { Containers, DeferredObservableContainer } from "../../containers.js";
import { Equality, Factory, Reducer } from "../../functions.js";
declare const DeferredObservable_actionReducer: <TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Containers.Operator<DeferredObservableContainer.Type, TAction, T>;
export default DeferredObservable_actionReducer;
