import { Factory } from "../../../functions.js";
import { ToRunnable, RunnableObservableLike } from "../../../rx.js";
import { VirtualTimeSchedulerLike } from "../../../scheduling.js";
declare const RunnableObservable_toRunnable: ToRunnable<RunnableObservableLike, {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
}>["toRunnable"];
export { RunnableObservable_toRunnable as default };
