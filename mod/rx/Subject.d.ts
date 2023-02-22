export declare const create: <T>(options?: {
    replay?: number | undefined;
} | undefined) => import("../rx.js").SubjectLike<T>;
export declare const publish: <T>(v: T) => import("../functions.js").Function1<import("../rx.js").SubjectLike<T>, import("../rx.js").SubjectLike<T>>;
export declare const publishTo: <T>(subject: import("../rx.js").SubjectLike<T>) => import("../functions.js").SideEffect1<T>;
/** @ignore */
declare const Subject: {
    create: <T>(options?: {
        replay?: number | undefined;
    } | undefined) => import("../rx.js").SubjectLike<T>;
    publish: <T_1>(v: T_1) => import("../functions.js").Function1<import("../rx.js").SubjectLike<T_1>, import("../rx.js").SubjectLike<T_1>>;
    publishTo: <T_2>(subject: import("../rx.js").SubjectLike<T_2>) => import("../functions.js").SideEffect1<T_2>;
};
export default Subject;
