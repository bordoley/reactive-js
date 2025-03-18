import { EventSourceLike, ObservableLike, ProducerLike, ProducerWithSideEffectsLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { ConsumerLike, DisposableLike, PauseableLike } from "../utils.js";
export interface ProducerModule {
    create<T>(f: (consumer: ConsumerLike<T>) => void): ProducerWithSideEffectsLike<T>;
    toEventSource<T>(): Function1<ProducerLike<T>, PauseableLike & EventSourceLike<T> & DisposableLike>;
    toObservable<T>(): Function1<ProducerLike<T>, ObservableLike<T>>;
}
export type Signature = ProducerModule;
export declare const create: Signature["create"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
