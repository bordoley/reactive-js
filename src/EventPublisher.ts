import EventPublisher_create from "./EventPublisher/__internal__/EventPublisher.create.js";
import EventPublisher_createRefCounted from "./EventPublisher/__internal__/EventPublisher.createRefCounted.js";
import { EventPublisherLike } from "./types.js";

export interface Signature {
  create<T>(): EventPublisherLike<T>;
  createRefCounted<T>(): EventPublisherLike<T>;
}

export const create: Signature["create"] = EventPublisher_create;
export const createRefCounted: Signature["createRefCounted"] =
  EventPublisher_createRefCounted;
