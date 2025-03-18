import { BroadcasterLike, ObservableLike, ProducerLike, ProducerWithSideEffectsLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { ConsumerLike, DisposableLike, PauseableLike } from "../utils.js";
export interface ProducerModule {
    create<T>(f: (consumer: ConsumerLike<T>) => void): ProducerWithSideEffectsLike<T>;
    broadcast<T>(options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
    }): Function1<ProducerLike<T>, PauseableLike & BroadcasterLike<T> & DisposableLike>;
    toObservable<T>(): Function1<ProducerLike<T>, ObservableLike<T>>;
}
export type Signature = ProducerModule;
export declare const create: Signature["create"];
export declare const broadcast: Signature["broadcast"];
export declare const toObservable: Signature["toObservable"];
