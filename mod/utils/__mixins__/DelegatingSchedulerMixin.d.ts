import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike, SchedulerLike, SchedulerLike_inContinuation } from "../../utils.js";
type TReturn = Omit<SchedulerLike, keyof DisposableContainerLike>;
type TPrototype = Omit<SchedulerLike, keyof DisposableContainerLike | typeof SchedulerLike_inContinuation>;
declare const DelegatingSchedulerMixin: Mixin1<TReturn, TPrototype>;
export default DelegatingSchedulerMixin;
