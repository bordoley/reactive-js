import { Function1 } from "../functions.js";
import { ConsumerLike, EventListenerLike, ObserverLike, SchedulerLike } from "../utils.js";
export interface ConsumerModule {
    toConsumer<T>(): Function1<EventListenerLike<T>, ConsumerLike<T>>;
    toObserver<T>(scheduler: SchedulerLike): Function1<EventListenerLike<T>, ObserverLike<T>>;
}
export type Signature = ConsumerModule;
export declare const toConsumer: Signature["toConsumer"];
export declare const toObserver: Signature["toObserver"];
