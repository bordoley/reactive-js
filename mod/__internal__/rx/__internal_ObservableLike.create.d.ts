import { SideEffect1 } from "../../functions.mjs";
import { ObservableLike, EnumerableObservableLike, RunnableObservableLike } from "../../rx.mjs";
import { ObserverLike } from "../../scheduling.mjs";
declare const createObservableImpl: <T>(f: SideEffect1<ObserverLike>, isEnumerable: boolean, isRunnable: boolean) => ObservableLike<T>;
declare const createEnumerableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => EnumerableObservableLike<T>;
declare const createObservable: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const createRunnableObservable: <T>(f: SideEffect1<ObserverLike<T>>) => RunnableObservableLike<T>;
export { createEnumerableObservable, createObservable, createObservableImpl, createRunnableObservable };
