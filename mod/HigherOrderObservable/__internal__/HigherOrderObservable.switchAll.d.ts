import { Container, DeferredTypeClass, ObservableContainer } from "../../containers.js";
import { Function1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const HigherOrderObservable_switchAll: <C extends ObservableContainer.Type>(lift: <T>(f: Function1<ObserverLike<T>, ObserverLike<Container.Of<C, T>>>) => Container.Operator<C, Container.Of<C, T>, T>) => <T_1>() => Container.Operator<C, Container.Of<C, T_1>, T_1>;
export default HigherOrderObservable_switchAll;
