export declare const push: <T, TDispatcher extends import("../util.js").QueueLike<T>>(v: T) => import("../functions.js").Updater<TDispatcher>;
export declare const pushTo: <T>(queue: import("../util.js").QueueLike<T>) => import("../functions.js").SideEffect1<T>;
