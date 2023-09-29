import { Mixin1 } from "../../__internal__/mixins.js";
import { SchedulerLike } from "../../concurrent.js";
import { DisposableLike } from "../../utils.js";
declare const DelegatingSchedulerImplementationMixin: Mixin1<SchedulerLike & DisposableLike, SchedulerLike, DisposableLike>;
export default DelegatingSchedulerImplementationMixin;
