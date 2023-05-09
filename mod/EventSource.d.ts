import { EventSourceContainer } from "./containers.js";
import { Function1, SideEffect1 } from "./functions.js";
import { DisposableLike, EventSourceLike } from "./types.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("./types.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const forEach: EventSourceContainer.TypeClass["forEach"];
export declare const ignoreElements: EventSourceContainer.TypeClass["ignoreElements"];
export declare const keep: EventSourceContainer.TypeClass["keep"];
export declare const map: EventSourceContainer.TypeClass["map"];
export declare const pick: EventSourceContainer.TypeClass["pick"];
export declare const toObservable: EventSourceContainer.TypeClass["toObservable"];
