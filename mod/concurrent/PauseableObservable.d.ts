import { DeferredObservableLike, DispatcherLike, PauseableObservableLike } from "../concurrent.js";
import { Function1 } from "../functions.js";
/**
 * @noInheritDoc
 * @category Module
 */
export interface PauseableObservableModule {
    sinkInto<T>(sink: DispatcherLike<T>): Function1<PauseableObservableLike<T>, DeferredObservableLike<void>>;
}
export type Signature = PauseableObservableModule;
export declare const sinkInto: Signature["sinkInto"];
