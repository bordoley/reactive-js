import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { Factory, SideEffect1 } from "../../../functions.js";
import { AsyncReducer, ObservableLike, ObserverLike, ScanAsync } from "../../../rx.js";
declare const HigherOrderObservable_scanAsync: <C extends ObservableLike<unknown>, CInner extends ObservableLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: AsyncReducer<CInner, T_1, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export default HigherOrderObservable_scanAsync;
