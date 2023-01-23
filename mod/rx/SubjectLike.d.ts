import { Function1, SideEffect1 } from "../functions.js";
import { SubjectLike } from "../rx.js";
declare const create: <T>(options?: {
    replay?: number | undefined;
} | undefined) => SubjectLike<T>;
declare const publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
declare const publishTo: <T>(subject: SubjectLike<T>) => SideEffect1<T>;
export { create, publish, publishTo };
