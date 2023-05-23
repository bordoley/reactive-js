import type * as DeferredObservable from "./DeferredObservable.js";
import { Container, Container_T, Container_type, HigherOrderObservableModule, MulticastObservableLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface MulticastObservableContainer extends Container {
    readonly [Container_type]?: MulticastObservableLike<this[typeof Container_T]>;
}
export type Type = MulticastObservableContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface MulticastObservableModule extends HigherOrderObservableModule<Type, DeferredObservable.Type> {
}
export type Signature = MulticastObservableModule;
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const exhaust: Signature["exhaust"];
export declare const exhaustMap: Signature["exhaustMap"];
export declare const mergeAll: Signature["mergeAll"];
export declare const mergeMap: Signature["mergeMap"];
export declare const scanLast: Signature["scanLast"];
export declare const scanMany: Signature["scanMany"];
export declare const switchAll: Signature["switchAll"];
export declare const switchMap: Signature["switchMap"];
