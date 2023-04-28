import { Empty, ForEach, IgnoreElements, Keep, Map, Pick } from "../containers.js";
import { Function1, SideEffect1 } from "../functions.js";
import { ToObservable } from "../rx.js";
import { DisposableLike, EventSourceLike } from "../util.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("../util.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const empty: Empty<EventSourceLike>["empty"];
export declare const forEach: ForEach<EventSourceLike>["forEach"];
export declare const ignoreElements: IgnoreElements<EventSourceLike>["ignoreElements"];
export declare const keep: Keep<EventSourceLike>["keep"];
export declare const map: Map<EventSourceLike>["map"];
export declare const pick: Pick<EventSourceLike>["pick"];
export declare const toObservable: ToObservable<EventSourceLike>["toObservable"];
