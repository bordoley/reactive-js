import { Function1 } from "./functions.js";
import { Container, Container_T, Container_type, MulticastObservableLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}
export type Type = PromiseContainer;
export interface PromiseModule {
    toObservable<T>(): Function1<PromiseLike<T>, MulticastObservableLike<T>>;
}
export type Signature = PromiseModule;
export declare const toObservable: Signature["toObservable"];
