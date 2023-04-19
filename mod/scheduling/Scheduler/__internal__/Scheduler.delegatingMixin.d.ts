import { Mixin1 } from "../../../__internal__/mixins.js";
import { SchedulerLike } from "../../../scheduling.js";
import { DisposableLike } from "../../../util.js";
declare const Scheduler_delegatingMixin: Mixin1<SchedulerLike & DisposableLike, SchedulerLike, DisposableLike>;
export default Scheduler_delegatingMixin;
