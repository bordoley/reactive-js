import { Function1 } from "../functions.js";
import { ConsumerLike, ObserverLike, SchedulerLike } from "../utils.js";
export interface ConsumerModule {
    toObserver<T>(scheduler: SchedulerLike): Function1<ConsumerLike<T>, ObserverLike<T>>;
}
export type Signature = ConsumerModule;
export declare const toObserver: Signature["toObserver"];
