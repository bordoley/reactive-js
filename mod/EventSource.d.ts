import { Function1, SideEffect1 } from "./functions.js";
import { AsynchronousContainerBaseTypeClass, ContainerTypeClass, StatefulContainerBaseTypeClass } from "./type-classes.js";
import { DisposableLike, EventListenerLike, EventSourceContainer, EventSourceLike } from "./types.js";
export type Type = EventSourceContainer;
export interface Signature extends ContainerTypeClass<Type>, StatefulContainerBaseTypeClass<Type>, AsynchronousContainerBaseTypeClass<Type> {
    addEventHandler<T>(handler: SideEffect1<T>): Function1<EventSourceLike<T>, DisposableLike>;
    /**
     * @category Constructor
     */
    create<T>(setup: SideEffect1<EventListenerLike<T>>): EventSourceLike<T>;
}
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const forEach: Signature["forEach"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
export declare const toSharedObservable: Signature["toSharedObservable"];
