import { Empty, Keep, Map } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EventSourceLike } from "../util.js";
export declare const empty: Empty<EventSourceLike>["empty"];
export declare const keep: Keep<EventSourceLike, {
    replay?: number;
}>["keep"];
export declare const map: Map<EventSourceLike, {
    replay?: number;
}>["map"];
export declare const toObservable: ToObservable<EventSourceLike>["toObservable"];
