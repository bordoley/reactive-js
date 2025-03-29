import { PublisherLike } from "../computations.js";
export declare const create: <T>(options?: {
    readonly autoDispose?: boolean;
}) => PublisherLike<T>;
export declare const createAsync: <T>(options?: {
    readonly autoDispose?: boolean;
}) => PublisherLike<T>;
