import { Function1 } from "../functions.js";
import { StreamLike, StreamableLike } from "../streaming.js";
export declare const sourceFrom: <TReq, T, TSinkStream extends StreamLike<T, TReq>>(streamable: StreamableLike<TReq, T>) => Function1<TSinkStream, TSinkStream>;
export declare const syncState: <T>(onInit: (initialValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, onChange: (oldValue: T, newValue: T) => import("../rx.js").ObservableLike<import("../functions.js").Updater<T>>, options?: {
    readonly throttleDuration?: number | undefined;
    readonly capacity?: number | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly scheduler: import("../scheduling.js").SchedulerLike;
} | undefined) => Function1<StreamLike<import("../functions.js").Updater<T>, T>, StreamLike<import("../functions.js").Updater<T>, T>>;
