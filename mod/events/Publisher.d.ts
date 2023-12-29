import { PublisherLike } from "../events.js";
export declare const create: <T>(options?: {
    readonly autoDispose?: boolean;
}) => PublisherLike<T>;
