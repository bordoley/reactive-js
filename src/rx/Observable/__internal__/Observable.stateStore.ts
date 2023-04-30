import { ContainerOperator } from "../../../containers.js";
import { Equality, Factory, Updater } from "../../../functions.js";
import { ObservableContainerLike } from "../../../rx.js";
import Observable_actionReducer from "./Observable.actionReducer.js";

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const Observable_stateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): ContainerOperator<ObservableContainerLike, Updater<T>, T> =>
  Observable_actionReducer<Updater<T>, T>(updateReducer, initialState, options);

export default Observable_stateStore;
