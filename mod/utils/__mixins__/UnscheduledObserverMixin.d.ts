import { Mixin } from "../../__internal__/mixins.js";
import { ObserverLike, ObserverLike_mustNotifyInSchedulerContinuation } from "../../utils.js";
type TReturn<T> = Pick<ObserverLike<T>, typeof ObserverLike_mustNotifyInSchedulerContinuation>;
declare const UnscheduledObserverMixin: <T>() => Mixin<TReturn<T>>;
export default UnscheduledObserverMixin;
