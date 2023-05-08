import {
  Containers,
  ObservableContainer,
  ObservableLike_observe,
  ObserverLike,
  ReactiveContainers,
} from "../../../core.js";
import { Factory, SideEffect1 } from "../../../functions.js";

const HigherOrderObservable_defer =
  <C extends ObservableContainer>(
    createObservable: <T>(
      f: SideEffect1<ObserverLike<T>>,
    ) => Containers.Of<C, T>,
  ): ReactiveContainers.TypeClass<C>["defer"] =>
  <T>(factory: Factory<Containers.Of<C, T>>): Containers.Of<C, T> =>
    createObservable(observer => {
      factory()[ObservableLike_observe](observer);
    });

export default HigherOrderObservable_defer;
