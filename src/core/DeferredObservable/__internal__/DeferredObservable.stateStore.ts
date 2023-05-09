import { Containers, DeferredObservableContainer } from "../../../core.js";
import { Equality, Factory, Updater } from "../../../functions.js";
import DeferredObservable_actionReducer from "./DeferredObservable.actionReducer.js";

const updateReducer = <T>(acc: T, updater: Updater<T>) => updater(acc);

const DeferredObservable_stateStore = <T>(
  initialState: Factory<T>,
  options?: { readonly equality?: Equality<T> },
): Containers.Operator<DeferredObservableContainer, Updater<T>, T> =>
  DeferredObservable_actionReducer<Updater<T>, T>(
    updateReducer,
    initialState,
    options,
  );

export default DeferredObservable_stateStore;
