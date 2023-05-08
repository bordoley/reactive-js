export declare const create: {
    <T>(notify: (this: import("../core.js").EventListenerLike<T>, a: T) => void): import("../core.js").EventListenerLike<T>;
    <T_1>(notify: (this: import("../core.js").EventListenerLike<T_1>, a: T_1) => void, options: {
        errorSafe: true;
    }): import("../core.js").ErrorSafeEventListenerLike<T_1>;
    <T_2>(notify: (this: import("../core.js").EventListenerLike<T_2>, a: T_2) => void, options?: {
        errorSafe?: boolean | undefined;
    } | undefined): import("../core.js").EventListenerLike<T_2>;
};
