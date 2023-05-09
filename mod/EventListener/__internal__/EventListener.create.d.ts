import { ErrorSafeEventListenerLike, EventListenerLike } from "../../types.js";
interface EventListenerCreate {
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void): EventListenerLike<T>;
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void, options: {
        errorSafe: true;
    }): ErrorSafeEventListenerLike<T>;
    create<T>(notify: (this: EventListenerLike<T>, a: T) => void, options?: {
        errorSafe?: boolean;
    }): EventListenerLike<T>;
}
declare const EventListener_create: EventListenerCreate["create"];
export default EventListener_create;
