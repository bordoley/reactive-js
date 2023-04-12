import { alwaysTrue, identity } from "../../../functions.js";
import { EventPublisherLike } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "./EventPublisher.createWithPredicateAndSelector.js";

const EventPublisher_create = <T>(options?: {
  readonly replay?: number;
}): EventPublisherLike<T> =>
  EventPublisher_createWithPredicateAndSelector<T, T>(
    alwaysTrue,
    identity,
    options,
  );

export default EventPublisher_create;
