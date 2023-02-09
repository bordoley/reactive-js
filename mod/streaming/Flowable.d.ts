import { Function1 } from "../functions.js";
import { ToObservable, ObservableLike } from "../rx.js";
import { FlowableLike } from "../streaming.js";
declare const toObservable: ToObservable<FlowableLike>["toObservable"];
/** @ignore */
declare const Flowable: {
    toObservable: <T>(options?: undefined) => Function1<FlowableLike<T>, ObservableLike<T>>;
};
export { Flowable as default, toObservable };
