import { BroadcasterLike, DeferredObservableWithSideEffectsLike } from "../computations.js";
import { Function1 } from "../functions.js";
export interface BroadcasterModule {
    toObservable<T>(): Function1<BroadcasterLike<T>, DeferredObservableWithSideEffectsLike<T>>;
}
export type Signature = BroadcasterModule;
export declare const toObservable: Signature["toObservable"];
