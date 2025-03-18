import { BroadcasterLike, DeferredObservableWithSideEffectsLike, EventSourceLike } from "../computations.js";
import { Function1, SideEffect1 } from "../functions.js";
import { DisposableLike, PauseableLike, SinkLike } from "../utils.js";
export interface BroadcasterModule {
    create<T>(setup: SideEffect1<SinkLike<T>>, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
    }): BroadcasterLike<T> & DisposableLike;
    createPauseable<T>(op: Function1<EventSourceLike<boolean> & DisposableLike, BroadcasterLike<T>>): PauseableLike & BroadcasterLike<T> & DisposableLike;
    toEventSource<T>(): <TBroadcaster extends BroadcasterLike<T>>(broadcaster: TBroadcaster) => TBroadcaster extends PauseableLike ? PauseableLike & EventSourceLike<T> : EventSourceLike<T>;
    toObservable<T>(): Function1<BroadcasterLike<T>, DeferredObservableWithSideEffectsLike<T>>;
}
export type Signature = BroadcasterModule;
export declare const create: Signature["create"];
export declare const createPauseable: Signature["createPauseable"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
