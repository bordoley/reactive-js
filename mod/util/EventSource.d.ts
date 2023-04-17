import { Empty, ForEach, IgnoreElements, Keep, Map, Pick } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EventSourceLike } from "../util.js";
/**
 * @category Constructor
 */
export declare const create: <T>(setup: import("../functions.js").SideEffect1<import("../util.js").EventListenerLike<T>>, options?: {
    readonly replay?: number | undefined;
} | undefined) => EventSourceLike<T>;
export declare const empty: Empty<EventSourceLike>["empty"];
export declare const forEach: ForEach<EventSourceLike>["forEach"];
export declare const ignoreElements: IgnoreElements<EventSourceLike>["ignoreElements"];
export declare const keep: Keep<EventSourceLike>["keep"];
export declare const map: Map<EventSourceLike>["map"];
export declare const pick: Pick<EventSourceLike>["pick"];
export declare const toObservable: ToObservable<EventSourceLike>["toObservable"];
