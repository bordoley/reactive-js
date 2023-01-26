import { Factory } from "../../../functions.js";
import { ToRunnable, ObservableLike } from "../../../rx.js";
import { VirtualTimeSchedulerLike } from "../../../scheduling.js";
declare const Observable_toRunnable: ToRunnable<ObservableLike, {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
}>["toRunnable"];
export { Observable_toRunnable as default };
