import { EventPublisherLike } from "../util.js";
export declare const create: <T>(options?: {
    readonly replay?: number;
}) => EventPublisherLike<T>;
export declare const disposed: <T>() => EventPublisherLike<T>;
