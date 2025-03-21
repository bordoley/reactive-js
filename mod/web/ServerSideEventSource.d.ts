import { EventSourceLike } from "../computations.js";
import { DisposableLike } from "../utils.js";
export declare const create: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => EventSourceLike<MessageEvent> & DisposableLike;
