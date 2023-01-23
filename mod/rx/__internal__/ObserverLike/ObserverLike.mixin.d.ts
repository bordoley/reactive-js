import { Mixin1 } from "../../../__internal__/mixins.js";
import { ObserverLike, SinkLike_notify } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof SinkLike_notify>;
declare const ObserverLike__mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike>;
export { ObserverLike__mixin as default };
