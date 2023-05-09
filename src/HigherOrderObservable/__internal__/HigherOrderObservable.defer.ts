import {
  Container,
  ObservableContainer,
  StatefulTypeClass,
} from "../../containers.js";
import { Factory, SideEffect1 } from "../../functions.js";
import { ObservableLike_observe, ObserverLike } from "../../types.js";

const HigherOrderObservable_defer =
  <C extends ObservableContainer.Type>(
    createObservable: <T>(
      f: SideEffect1<ObserverLike<T>>,
    ) => Container.Of<C, T>,
  ): StatefulTypeClass<C>["defer"] =>
  <T>(factory: Factory<Container.Of<C, T>>): Container.Of<C, T> =>
    createObservable(observer => {
      factory()[ObservableLike_observe](observer);
    });

export default HigherOrderObservable_defer;
