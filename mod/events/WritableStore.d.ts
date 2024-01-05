import { WritableStoreLike } from "../events.js";
import { Equality } from "../functions.js";
export declare const create: <T>(initialValue: T, options?: {
    readonly equality?: Equality<T>;
}) => WritableStoreLike<T>;
