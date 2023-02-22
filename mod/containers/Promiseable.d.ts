import { PromiseableLike } from "../containers.js";
import { ToObservable } from "../rx.js";
/**
 * @category Constructor
 */
export declare const fromObservable: <T>(scheduler: import("../scheduling.js").SchedulerLike) => (observable: import("../rx.js").ObservableLike<T>) => PromiseLike<T>;
export declare const toObservable: ToObservable<PromiseableLike>["toObservable"];
/** @ignore */
declare const Promiseable: {
    fromObservable: <T>(scheduler: import("../scheduling.js").SchedulerLike) => (observable: import("../rx.js").ObservableLike<T>) => PromiseLike<T>;
    toObservable: <T_1>(options?: undefined) => import("../functions.js").Function1<PromiseableLike<T_1>, import("../rx.js").ObservableLike<T_1>>;
};
export default Promiseable;
