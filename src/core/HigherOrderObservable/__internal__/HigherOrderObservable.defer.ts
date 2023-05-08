import {
  Container,
  ObservableContainer,
  ObservableLike_observe,
  ObserverLike,
  ReactiveContainer,
} from "../../../core.js";
import { Factory, SideEffect1 } from "../../../functions.js";

const HigherOrderObservable_defer =
  <C extends ObservableContainer>(
    createObservable: <T>(
      f: SideEffect1<ObserverLike<T>>,
    ) => Container.Of<C, T>,
  ): ReactiveContainer.Defer<C>["defer"] =>
  <T>(factory: Factory<Container.Of<C, T>>): Container.Of<C, T> =>
    createObservable(observer => {
      factory()[ObservableLike_observe](observer);
    });

export default HigherOrderObservable_defer;
