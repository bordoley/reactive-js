import { Mixin } from "../../__internal__/mixins.js";
import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationSchedulerLike } from "../__internal__/ContinuationScheduler.js";
declare const SchedulerMixin: Mixin<SchedulerLike & DisposableLike, ContinuationSchedulerLike>;
export default SchedulerMixin;
