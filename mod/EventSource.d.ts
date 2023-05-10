import { Function1, SideEffect1 } from "./functions.js";
import { ContainerTypeClass } from "./type-classes.js";
import { Container, Container_T, Container_type, DisposableLike, EventListenerLike, EventSourceLike } from "./types.js";
export interface Type extends Container {
    readonly [Container_type]?: EventSourceLike<this[typeof Container_T]>;
}
export interface Signature extends ContainerTypeClass<Type> {
    addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
    create: <T>(setup: SideEffect1<EventListenerLike<T>>) => EventSourceLike<T>;
}
export declare const addEventHandler: Signature["addEventHandler"];
export declare const create: Signature["create"];
export declare const forEach: Signature["forEach"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const pick: Signature["pick"];
