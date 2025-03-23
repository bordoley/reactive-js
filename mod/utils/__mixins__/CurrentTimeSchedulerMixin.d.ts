import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerMixinHostLike } from "../../utils/__mixins__/SchedulerMixin.js";
import { DisposableLike, SchedulerLike, SchedulerLike_maxYieldInterval, SchedulerLike_now } from "../../utils.js";
declare const CurrentTimeSchedulerMixin: Mixin<Omit<SchedulerLike & DisposableLike, typeof SchedulerLike_maxYieldInterval>, Omit<SchedulerMixinHostLike, typeof SchedulerLike_now>, Omit<SchedulerLike, typeof SchedulerLike_maxYieldInterval>>;
export default CurrentTimeSchedulerMixin;
