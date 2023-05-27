import { Container, Container_T, Container_type, DisposableLike, EventSourceContainerModule, StoreLike, WritableStoreLike } from "./types.js";
/**
 * @noInheritDoc
 */
export interface StoreContainer extends Container {
    readonly [Container_type]?: StoreLike<this[typeof Container_T]>;
}
export type Type = StoreContainer;
/**
 * @noInheritDoc
 * @category Module
 */
export interface StoreModule extends Pick<EventSourceContainerModule<Type>, "addEventHandler" | "toEventSource" | "toObservable" | "toReadonlyArrayAsync"> {
    create<T>(initialValue: T): WritableStoreLike<T> & DisposableLike;
}
export type Signature = StoreModule;
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
