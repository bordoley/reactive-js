import { Container, DeferredObservableContainer } from "../../containers.js";
import { Equality, Factory, Updater } from "../../functions.js";
declare const DeferredObservable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Container.Operator<DeferredObservableContainer.Type, Updater<T>, T>;
export default DeferredObservable_stateStore;
