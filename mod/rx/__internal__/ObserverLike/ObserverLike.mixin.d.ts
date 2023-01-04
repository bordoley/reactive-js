import { Mixin1 } from "../../../__internal__/mixins.mjs";
import { ObserverLike, SinkLike_notify } from "../../../rx.mjs";
import { SchedulerLike } from "../../../scheduling.mjs";
import { DisposableLike } from "../../../util.mjs";
declare type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof SinkLike_notify>;
declare const ObserverLike__mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike>;
export { ObserverLike__mixin as default };
