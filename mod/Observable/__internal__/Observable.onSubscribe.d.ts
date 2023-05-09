import { Containers, DeferredObservableContainer, EnumerableContainer, ObservableContainer, RunnableContainer, SharedObservableContainer } from "../../containers.js";
import { Factory } from "../../functions.js";
import { DisposableOrTeardown } from "../../types.js";
interface ObservableOnSubscribe {
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Containers.Operator<EnumerableContainer, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Containers.Operator<RunnableContainer, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Containers.Operator<DeferredObservableContainer, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Containers.Operator<SharedObservableContainer, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Containers.Operator<ObservableContainer, T, T>;
}
declare const Observable_onSubscribe: ObservableOnSubscribe["onSubscribe"];
export default Observable_onSubscribe;
