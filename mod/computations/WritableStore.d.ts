import { WritableStoreLike } from "../computations.js";
import { Equality } from "../functions.js";
export declare const create: <T>(initialValue: T, options?: {
    readonly equality?: Equality<T>;
    readonly autoDispose?: boolean;
}) => WritableStoreLike<T>;
