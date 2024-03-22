import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationSchedulerLike } from "../__internal__/ContinuationScheduler.js";
declare const CurrentTimeSchedulerMixin: Mixin<SchedulerLike & DisposableLike, Omit<ContinuationSchedulerLike, typeof SchedulerLike_now>>;
export default CurrentTimeSchedulerMixin;
