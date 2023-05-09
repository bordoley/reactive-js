import { Container, ObservableContainer, ObservableTypeClass } from "../../containers.js";
import { Factory, Function2, SideEffect1 } from "../../functions.js";
import { ObserverLike } from "../../types.js";
declare const HigherOrderObservable_scanMany: <C extends ObservableContainer.Type>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => Container.Of<C, T>) => <T_1, TAcc>(scanner: Function2<TAcc, T_1, Container.Of<C, TAcc>>, initialValue: Factory<TAcc>) => Container.Operator<C, T_1, TAcc>;
export default HigherOrderObservable_scanMany;
