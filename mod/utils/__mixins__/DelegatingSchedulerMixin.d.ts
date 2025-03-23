import { Mixin1 } from "../../__internal__/mixins.js";
import { DisposableContainerLike, SchedulerLike } from "../../utils.js";
declare const DelegatingSchedulerMixin: Mixin1<Omit<SchedulerLike, keyof DisposableContainerLike>, SchedulerLike>;
export default DelegatingSchedulerMixin;
