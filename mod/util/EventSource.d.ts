import { Empty, ForEach, IgnoreElements, Keep, Map, Pick } from "../containers.js";
import { Function1, SideEffect1 } from "../functions.js";
import { ToObservable } from "../rx.js";
import { DisposableLike, EventSourceContainerLike, EventSourceLike } from "../util.js";
export declare const addEventHandler: <T>(handler: SideEffect1<T>) => Function1<EventSourceLike<T>, DisposableLike>;
/**
 * @category Constructor
 */
export declare const create: <T>(setup: SideEffect1<import("../util.js").EventListenerLike<T>>) => EventSourceLike<T>;
export declare const empty: Empty<EventSourceContainerLike>["empty"];
export declare const forEach: ForEach<EventSourceContainerLike>["forEach"];
export declare const ignoreElements: IgnoreElements<EventSourceContainerLike>["ignoreElements"];
export declare const keep: Keep<EventSourceContainerLike>["keep"];
export declare const map: Map<EventSourceContainerLike>["map"];
export declare const pick: Pick<EventSourceContainerLike>["pick"];
export declare const toObservable: ToObservable<EventSourceContainerLike>["toObservable"];
