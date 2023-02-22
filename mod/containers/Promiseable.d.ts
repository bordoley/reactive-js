import { PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
/**
 * @category Constructor
 */
export declare const fromObservable: <T>(scheduler: import("../scheduling.js").SchedulerLike) => (observable: import("../rx.js").ObservableLike<T>) => PromiseLike<T>;
export declare const toObservable: ToObservable<PromiseableLike>["toObservable"];
