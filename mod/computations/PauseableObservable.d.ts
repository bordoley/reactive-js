import { DeferredObservableWithSideEffectsLike, EventSourceLike, MulticastObservableLike, PauseableObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { ConsumerLike, DisposableLike } from "../utils.js";
interface PauseableObservableModule {
    create<T>(op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>): PauseableObservableLike<T> & DisposableLike;
    enqueue<T>(queue: ConsumerLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
}
export type Signature = PauseableObservableModule;
export declare const create: Signature["create"];
export declare const enqueue: Signature["enqueue"];
export {};
