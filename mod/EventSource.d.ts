import { Containers, EventSourceContainer } from "./containers.js";
import { Function1, SideEffect1 } from "./functions.js";
import { DisposableLike, EventSourceLike } from "./types.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("./types.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const forEach: Containers.TypeClass<EventSourceContainer>["forEach"];
export declare const ignoreElements: Containers.TypeClass<EventSourceContainer>["ignoreElements"];
export declare const keep: Containers.TypeClass<EventSourceContainer>["keep"];
export declare const map: Containers.TypeClass<EventSourceContainer>["map"];
export declare const pick: Containers.TypeClass<EventSourceContainer>["pick"];
export declare const toObservable: Containers.TypeClass<EventSourceContainer>["toObservable"];
