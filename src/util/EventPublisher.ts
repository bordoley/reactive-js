import { EventPublisherLike } from "../util.js";
import EventPublisher_create from "./EventPublisher/__internal__/EventPublisher.create.js";
import EventPublisher_createRefCounted from "./EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import EventPublisher_disposed from "./EventPublisher/__internal__/EventPublisher.disposed.js";

export const create: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = EventPublisher_create;

export const createRefCounted: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = EventPublisher_createRefCounted;

export const disposed = EventPublisher_disposed;
