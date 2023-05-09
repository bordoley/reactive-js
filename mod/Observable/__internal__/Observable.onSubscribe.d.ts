import { Container, DeferredObservableContainer, EnumerableContainer, ObservableContainer, RunnableContainer, SharedObservableContainer } from "../../containers.js";
import { Factory } from "../../functions.js";
import { DisposableOrTeardown } from "../../types.js";
interface ObservableOnSubscribe {
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Container.Operator<EnumerableContainer.Type, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Container.Operator<RunnableContainer.Type, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Container.Operator<DeferredObservableContainer.Type, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Container.Operator<SharedObservableContainer.Type, T, T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): Container.Operator<ObservableContainer.Type, T, T>;
}
declare const Observable_onSubscribe: ObservableOnSubscribe["onSubscribe"];
export default Observable_onSubscribe;
