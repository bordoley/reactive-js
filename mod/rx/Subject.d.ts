export declare const create: <T>(options?: {
    replay?: number | undefined;
} | undefined) => import("../rx.js").SubjectLike<T>;
export declare const publish: <T>(v: T) => import("../functions.js").Function1<import("../rx.js").SubjectLike<T>, import("../rx.js").SubjectLike<T>>;
export declare const publishTo: <T>(subject: import("../rx.js").SubjectLike<T>) => import("../functions.js").SideEffect1<T>;
