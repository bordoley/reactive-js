import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike, SchedulerLike_now } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { SchedulerMixinBaseLike } from "./SchedulerMixin.js";
declare const CurrentTimeSchedulerMixin: Mixin<SchedulerLike & DisposableLike, Omit<SchedulerMixinBaseLike, typeof SchedulerLike_now>>;
export default CurrentTimeSchedulerMixin;
