import { Method1 } from "../functions.js";
import { EventListenerLike } from "../util.js";
import EventListener_create from "./EventListener/__internal__/EventListener.create.js";
import EventListener_toErrorSafeEventListener from "./EventListener/__internal__/EventListener.toErrorSafeEventListener.js";

export const create: <T>(
  notify: Method1<EventListenerLike<T>, T, void>,
) => EventListenerLike<T> = EventListener_create;

export const toErrorSafeEventListener = EventListener_toErrorSafeEventListener;
