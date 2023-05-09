import { Container, ObservableContainer, StatefulTypeClass } from "../../containers.js";
import { Factory, SideEffect1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const HigherOrderObservable_defer: <C extends ObservableContainer.Type>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Container.Of<C, T>) => <T_1>(factory: Factory<Container.Of<C, T_1>>) => Container.Of<C, T_1>;
export default HigherOrderObservable_defer;
