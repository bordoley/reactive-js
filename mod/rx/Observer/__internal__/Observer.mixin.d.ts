import { Mixin1 } from "../../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_notify } from "../../../rx.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
type TObserverMixinReturn<T> = Omit<ObserverLike<T>, keyof DisposableLike | typeof ObserverLike_notify>;
declare const Observer_mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike>;
export default Observer_mixin;
