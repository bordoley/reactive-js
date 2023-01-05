import { ContainerOf, ContainerOperator } from "../../../containers.mjs";
import { SideEffect1, Factory } from "../../../functions.mjs";
import { ObservableLike, ObserverLike, AsyncReducer } from "../../../rx.mjs";
declare const HigherOrderObservableLike__scanAsync: <C extends ObservableLike<unknown>, CInner extends ObservableLike<unknown>>(createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ContainerOf<C, T>) => <T_1, TAcc>(scanner: AsyncReducer<CInner, T_1, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T_1, TAcc>;
export { HigherOrderObservableLike__scanAsync as default };
