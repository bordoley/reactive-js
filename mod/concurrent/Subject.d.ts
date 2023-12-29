import { SubjectLike } from "../concurrent.js";
export declare const create: <T>(options?: {
    readonly replay?: number;
    readonly autoDispose?: boolean;
}) => SubjectLike<T>;
