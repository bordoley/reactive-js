import { Empty, ForEach, IgnoreElements, Keep, Map, Pick } from "../containers.js";
import { Function1, SideEffect1 } from "../functions.js";
import { ToObservable } from "../rx.js";
import { DisposableLike, EventSourceContainer, EventSourceLike } from "../util.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("../util.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const empty: Empty<EventSourceContainer>["empty"];
export declare const forEach: ForEach<EventSourceContainer>["forEach"];
export declare const ignoreElements: IgnoreElements<EventSourceContainer>["ignoreElements"];
export declare const keep: Keep<EventSourceContainer>["keep"];
export declare const map: Map<EventSourceContainer>["map"];
export declare const pick: Pick<EventSourceContainer>["pick"];
export declare const toObservable: ToObservable<EventSourceContainer>["toObservable"];
