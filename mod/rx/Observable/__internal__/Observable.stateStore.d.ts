import { ContainerOperator } from "../../../containers.js";
import { Equality, Factory, Updater } from "../../../functions.js";
import { ObservableContainer } from "../../../rx.js";
declare const Observable_stateStore: <T>(initialState: Factory<T>, options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableContainer, Updater<T>, T>;
export default Observable_stateStore;
