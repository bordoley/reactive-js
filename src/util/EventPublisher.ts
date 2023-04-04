import { EventPublisherLike } from "../util.js";
import EventPublisher_create from "./EventPublisher/__internal__/EventPublisher.create.js";

export const create: <T>(options?: {
  readonly replay?: number;
}) => EventPublisherLike<T> = EventPublisher_create;
