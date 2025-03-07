import { EventSourceLike } from "../../computations.js";
export declare const create: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => EventSourceLike<MessageEvent>;
