import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
export declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T>) => Function1<TSinkStream, TSinkStream>;
export declare const syncState: <T>(onInit: (initialValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, onChange: (oldValue: T, newValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, options?: {
    throttleDuration?: number | undefined;
    capacity?: number | undefined;
    backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    scheduler: import("../scheduling.js").SchedulerLike;
} | undefined) => Function1<StreamLike<import("../functions.js").Updater<T>, T>, StreamLike<import("../functions.js").Updater<T>, T>>;
