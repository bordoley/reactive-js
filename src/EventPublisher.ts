import EventPublisher_create from "./EventPublisher/__internal__/EventPublisher.create.js";
import EventPublisher_createRefCounted from "./EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import { EventPublisherLike } from "./types.js";

export const create: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = EventPublisher_create;

export const createRefCounted: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = EventPublisher_createRefCounted;
