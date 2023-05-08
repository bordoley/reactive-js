import { Container, ObservableContainer } from "../../../core.js";
import { Equality, Factory, Updater } from "../../../functions.js";
declare const Observable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => Container.Operator<ObservableContainer, Updater<T>, T>;
export default Observable_stateStore;
