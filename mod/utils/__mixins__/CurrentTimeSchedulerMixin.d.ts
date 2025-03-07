import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerMixinHostLike } from "../../utils/__mixins__/SchedulerMixin.js";
import { DisposableLike, SchedulerLike, SchedulerLike_now } from "../../utils.js";
declare const CurrentTimeSchedulerMixin: Mixin<SchedulerLike & DisposableLike, Omit<SchedulerMixinHostLike, typeof SchedulerLike_now>>;
export default CurrentTimeSchedulerMixin;
