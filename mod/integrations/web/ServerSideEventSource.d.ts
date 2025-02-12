import { EventSourceLike } from "../../events.js";
export declare const create: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => EventSourceLike<MessageEvent>;
