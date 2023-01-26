import { ContainerOf, ContainerOperator } from "../../../containers.js";
import { SideEffect1, Factory } from "../../../functions.js";
import { ObservableLike, ObserverLike, AsyncReducer } from "../../../rx.js";
declare const HigherOrderObservable$scanAsync: <C extends ObservableLike<unknown>, CInner extends ObservableLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: AsyncReducer<CInner, T_1, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export { HigherOrderObservable$scanAsync as default };
