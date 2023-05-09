export declare const create: {
    <T>(notify: (this: import("./types.js").EventListenerLike<T>, a: T) => void): import("./types.js").EventListenerLike<T>;
    <T_1>(notify: (this: import("./types.js").EventListenerLike<T_1>, a: T_1) => void, options: {
        errorSafe: true;
    }): import("./types.js").ErrorSafeEventListenerLike<T_1>;
    <T_2>(notify: (this: import("./types.js").EventListenerLike<T_2>, a: T_2) => void, options?: {
        errorSafe?: boolean | undefined;
    } | undefined): import("./types.js").EventListenerLike<T_2>;
};
