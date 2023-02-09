import { Function1, SideEffect1 } from "../functions.js";
import { SubjectLike } from "../rx.js";
declare const create: <T>(options?: {
    replay?: number | undefined;
} | undefined) => SubjectLike<T>;
declare const publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
declare const publishTo: <T>(subject: SubjectLike<T>) => SideEffect1<T>;
/** @ignore */
declare const Subject: {
    create: <T>(options?: {
        replay?: number | undefined;
    } | undefined) => SubjectLike<T>;
    publish: <T_1>(v: T_1) => Function1<SubjectLike<T_1>, SubjectLike<T_1>>;
    publishTo: <T_2>(subject: SubjectLike<T_2>) => SideEffect1<T_2>;
};
export { create, Subject as default, publish, publishTo };
