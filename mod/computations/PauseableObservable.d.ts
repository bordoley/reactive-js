import { DeferredObservableWithSideEffectsLike, EventSourceLike, MulticastObservableLike, PauseableObservableLike } from "../computations.js";
import { Function1 } from "../functions.js";
import { DispatcherLike } from "../utils.js";
interface PauseableObservableModule {
    create<T>(op: Function1<EventSourceLike<boolean>, MulticastObservableLike<T>>): PauseableObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
}
export type Signature = PauseableObservableModule;
export declare const create: Signature["create"];
export declare const dispatchTo: Signature["dispatchTo"];
export {};
