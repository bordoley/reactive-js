import { ContainerOf } from "../../../containers.js";
import { Factory, SideEffect1 } from "../../../functions.js";
import {
  ObservableContainer,
  ObservableLike_observe,
  ObserverLike,
  Reactive,
} from "../../../rx.js";

const HigherOrderObservable_defer =
  <C extends ObservableContainer>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): Reactive.Defer<C>["defer"] =>
  <T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T> =>
    createObservable(observer => {
      factory()[ObservableLike_observe](observer);
    });

export default HigherOrderObservable_defer;
