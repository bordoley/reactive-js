import { Empty, Keep, Map, Pick } from "../containers.js";
import { ToObservable } from "../rx.js";
import { EventSourceLike } from "../util.js";
export declare const empty: Empty<EventSourceLike>["empty"];
export declare const keep: Keep<EventSourceLike>["keep"];
export declare const map: Map<EventSourceLike>["map"];
export declare const pick: Pick<EventSourceLike>["pick"];
export declare const toObservable: ToObservable<EventSourceLike>["toObservable"];
