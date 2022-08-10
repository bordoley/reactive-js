import { Equality, SideEffect1, Predicate, Function1, Reducer, Factory } from "../../functions.mjs";
import { SchedulerLike, ObserverLike } from "../../scheduling.mjs";
import { DisposableLike, SinkLike_notify } from "../../util.mjs";
import { Class1 } from "../util/__internal__Objects.mjs";
declare type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof SinkLike_notify>;
declare const observerMixin: <T>() => Class1<SchedulerLike, TObserverMixinReturn<T>>;
declare const createDelegatingObserver: <T>(o: ObserverLike<T>) => ObserverLike<T>;
declare const createDistinctUntilChangedObserver: <T>(delegate: ObserverLike<T>, equality: Equality<T>) => ObserverLike<T>;
declare const createForEachObserver: <T>(delegate: ObserverLike<T>, effect: SideEffect1<T>) => ObserverLike<T>;
declare const createKeepObserver: <T>(delegate: ObserverLike<T>, predicate: Predicate<T>) => ObserverLike<T>;
declare const createMapObserver: <TA, TB>(delegate: ObserverLike<TB>, predicate: Function1<TA, TB>) => ObserverLike<TA>;
declare const createObserver: <T>(scheduler: SchedulerLike) => ObserverLike<T>;
declare const createPairwiseObserver: <T>(delegate: ObserverLike<readonly [
    T,
    T
]>) => ObserverLike<T>;
declare const createScanObserver: <T, TAcc>(delegat: ObserverLike<TAcc>, reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ObserverLike<T>;
declare const createSkipFirstObserver: <T>(delegate: ObserverLike<T>, count: number) => ObserverLike<T>;
declare const createTakeFirstObserver: <T>(delegate: ObserverLike<T>, count: number) => ObserverLike<T>;
declare const createTakeWhileObserver: <T>(delegate: ObserverLike<T>, predicate: Predicate<T>, inclusive: boolean) => ObserverLike<T>;
declare const createThrowIfEmptyObserver: <T>(delegate: ObserverLike<T>, factory: Factory<unknown>) => ObserverLike<T>;
export { createDelegatingObserver, createDistinctUntilChangedObserver, createForEachObserver, createKeepObserver, createMapObserver, createObserver, createPairwiseObserver, createScanObserver, createSkipFirstObserver, createTakeFirstObserver, createTakeWhileObserver, createThrowIfEmptyObserver, observerMixin };
