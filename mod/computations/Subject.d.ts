import { SubjectLike } from "../computations.js";
export declare const create: <T>(options?: {
    readonly replay?: number;
    readonly autoDispose?: boolean;
}) => SubjectLike<T>;
