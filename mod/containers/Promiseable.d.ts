import { Function1 } from "../functions.js";
import { ObservableLike, ToObservable } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { PromiseableLike } from "../containers.js";
declare const fromObservable: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, PromiseableLike<T>>;
declare const toObservable: ToObservable<PromiseableLike>["toObservable"];
/** @ignore */
declare const Promiseable: {
    fromObservable: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, PromiseableLike<T>>;
    toObservable: <T_1>(options?: undefined) => Function1<PromiseableLike<T_1>, ObservableLike<T_1>>;
};
export { Promiseable as default, fromObservable, toObservable };
