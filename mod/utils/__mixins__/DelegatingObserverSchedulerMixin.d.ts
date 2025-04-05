import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableLike, ObserverLike, ObserverLike_mustNotifyInSchedulerContinuation, SchedulerLike } from "../../utils.js";
type TReturn<T> = Pick<ObserverLike<T>, typeof ObserverLike_mustNotifyInSchedulerContinuation | keyof Omit<SchedulerLike, keyof DisposableLike>>;
declare const DelegatingObserverSchedulerMixin: <T>() => Mixin1<TReturn<T>, ObserverLike>;
export default DelegatingObserverSchedulerMixin;
