import { EventSourceLike } from "../../events.js";
export declare const create: (url: string | URL, options?: EventSourceInit & {
    readonly events?: readonly string[];
}) => EventSourceLike<{
    readonly id: string;
    readonly type: string;
    readonly data: string;
}>;
