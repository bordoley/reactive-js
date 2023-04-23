import { ContainerOf } from "../../../containers.js";
import { Factory, SideEffect1 } from "../../../functions.js";
import {
  Defer,
  ObservableLike,
  ObservableLike_observe,
  ObserverLike,
} from "../../../rx.js";

const HigherOrderObservable_defer =
  <C extends ObservableLike>(
    createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>,
  ): Defer<C>["defer"] =>
  <T>(factory: Factory<ContainerOf<C, T>>): ContainerOf<C, T> =>
    createObservable(observer => {
      factory()[ObservableLike_observe](observer);
    });

export default HigherOrderObservable_defer;
