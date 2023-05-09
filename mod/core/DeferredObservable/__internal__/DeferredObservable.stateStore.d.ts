import { Containers, DeferredObservableContainer } from "../../../core.js";
import { Equality, Factory, Updater } from "../../../functions.js";
declare const DeferredObservable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Containers.Operator<DeferredObservableContainer, Updater<T>, T>;
export default DeferredObservable_stateStore;
