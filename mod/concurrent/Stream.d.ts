import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, StreamLike } from "../concurrent.js";
import { Function1, Function2, Updater } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface StreamModule {
    syncState<T>(onInit: Function1<T, DeferredObservableLike<Updater<T>>>, onChange: Function2<T, T, DeferredObservableLike<Updater<T>>>, options?: {
        readonly throttleDuration?: number;
    }): Function1<StreamLike<Updater<T>, T>, DeferredObservableWithSideEffectsLike>;
}
export type Signature = StreamModule;
export declare const syncState: Signature["syncState"];
