import { ErrorSafeEventListenerLike, EventListenerLike } from "./types.js";
export interface Signature {
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void): EventListenerLike<T>;
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void, options: {
        errorSafe: true;
    }): ErrorSafeEventListenerLike<T>;
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void, options?: {
        errorSafe?: boolean;
    }): EventListenerLike<T>;
}
export declare const create: Signature["create"];
