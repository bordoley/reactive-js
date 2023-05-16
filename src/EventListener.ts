import EventListener_create from "./EventListener/__internal__/EventListener.create.js";
import { ErrorSafeEventListenerLike, EventListenerLike } from "./types.js";

export interface EventListenerModule {
  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
  ): EventListenerLike<T>;

  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
    options: { errorSafe: true },
  ): ErrorSafeEventListenerLike<T>;

  create<T>(
    notify: (this: EventListenerLike<T>, a: T) => void,
    options?: { errorSafe?: boolean },
  ): EventListenerLike<T>;
}

export type Signature = EventListenerModule;

export const create: Signature["create"] = EventListener_create;
