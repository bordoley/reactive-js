import { EventSourceLike, MulticastObservableLike, PauseableObservableLike, ProducerLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike, SchedulerLike } from "../utils.js";
interface PauseableObservableModule {
    create<T>(op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>): PauseableObservableLike<T> & DisposableLike;
    toProducer<T>(scheduler: SchedulerLike): Function1<PauseableObservableLike<T>, ProducerLike<T>>;
}
export type Signature = PauseableObservableModule;
export declare const create: Signature["create"];
export declare const toProducer: Signature["toProducer"];
export {};
