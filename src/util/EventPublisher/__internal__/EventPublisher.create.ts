import { alwaysTrue, identity } from "../../../functions.js";
import { EventPublisherLike } from "../../../util.js";
import EventPublisher_createWithPredicateAndSelector from "./EventPublisher.createWithPredicateAndSelector.js";

const EventPublisher_create = <T>(): EventPublisherLike<T> =>
  EventPublisher_createWithPredicateAndSelector<T, T>(alwaysTrue, identity);

export default EventPublisher_create;
