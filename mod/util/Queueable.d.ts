export declare const count: <T>(queue: import("../util.js").QueueableLike<T>) => number;
export declare const push: <T, TDispatcher extends import("../util.js").QueueableLike<T>>(v: T) => import("../functions.js").Updater<TDispatcher>;
export declare const pushTo: <T>(queue: import("../util.js").QueueableLike<T>) => import("../functions.js").SideEffect1<T>;
