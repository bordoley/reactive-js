import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
import { ContinuationSchedulerLike } from "../__internal__/ContinuationScheduler.js";
declare const SchedulerMixin: Mixin1<SchedulerLike & DisposableLike, number, ContinuationSchedulerLike>;
export default SchedulerMixin;
