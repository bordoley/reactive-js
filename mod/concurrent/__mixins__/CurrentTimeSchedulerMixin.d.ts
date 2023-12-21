import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
declare const CurrentTimeSchedulerMixin: Mixin<Pick<SchedulerLike, typeof SchedulerLike_now>>;
export default CurrentTimeSchedulerMixin;
