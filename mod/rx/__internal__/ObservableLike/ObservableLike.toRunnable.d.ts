import { Factory } from "../../../functions.js";
import { ToRunnable, ObservableLike } from "../../../rx.js";
import { VirtualTimeSchedulerLike } from "../../../scheduling.js";
declare const ObservableLike__toRunnable: ToRunnable<ObservableLike, {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
}>["toRunnable"];
export { ObservableLike__toRunnable as default };
