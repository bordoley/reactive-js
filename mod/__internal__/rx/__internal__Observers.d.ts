import { ObserverLike, SinkLike_notify } from "../../rx.mjs";
import { SchedulerLike } from "../../scheduling.mjs";
import { DisposableLike } from "../../util.mjs";
import { Mixin1 } from "../util/__internal__Objects.mjs";
declare type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof SinkLike_notify>;
declare const observerMixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike>;
declare const createDelegatingObserver: <T>(o: ObserverLike<T>) => ObserverLike<T>;
declare const createObserver: <T>(scheduler: SchedulerLike) => ObserverLike<T>;
export { createDelegatingObserver, createObserver, observerMixin };
