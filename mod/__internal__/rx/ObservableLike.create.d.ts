import { Defer } from "../../containers.mjs";
import { SideEffect1, Factory } from "../../functions.mjs";
import { ObserverLike, EnumerableObservableLike, ObservableLike, RunnableObservableLike } from "../../rx.mjs";
declare const createEnumerableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
declare const createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createRunnableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
declare const deferObservableImpl: <T>(factory: Factory<ObservableLike<T>>, isEnumerable: boolean, isRunnable: boolean) => ObservableLike<T>;
declare const deferEnumerableObservable: Defer<EnumerableObservableLike>["defer"];
declare const deferObservable: Defer<ObservableLike, {
    delay: number;
}>["defer"];
declare const deferRunnableObservable: Defer<RunnableObservableLike, {
    delay: number;
}>["defer"];
export { createEnumerableObservable, createObservable, createRunnableObservable, deferEnumerableObservable, deferObservable, deferObservableImpl, deferRunnableObservable };
