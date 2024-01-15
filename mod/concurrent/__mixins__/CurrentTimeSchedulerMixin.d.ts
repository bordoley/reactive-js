import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationSchedulerLike } from "../__internal__/ContinuationScheduler.js";
declare const CurrentTimeSchedulerMixin: Mixin1<SchedulerLike & DisposableLike, number, Omit<ContinuationSchedulerLike, typeof SchedulerLike_now>>;
export default CurrentTimeSchedulerMixin;
