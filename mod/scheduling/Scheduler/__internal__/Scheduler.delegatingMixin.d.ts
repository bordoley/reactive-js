import { Mixin1 } from "../../../__internal__/mixins.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
type TSchedulerDelegatingMixinReturn = Omit<SchedulerLike, keyof DisposableLike>;
declare const Scheduler_delegatingMixin: Mixin1<TSchedulerDelegatingMixinReturn, SchedulerLike>;
export default Scheduler_delegatingMixin;
