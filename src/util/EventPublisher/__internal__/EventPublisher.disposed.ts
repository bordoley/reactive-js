import { returns } from "../../../functions.js";
import { DisposableLike_dispose, EventPublisherLike } from "../../../util.js";
import EventPublisher_create from "./EventPublisher.create.js";

const EventPublisher_disposed: <T>() => EventPublisherLike<T> = /*@__PURE__*/ (<
  T,
>() => {
  const publisher = EventPublisher_create<T>();
  publisher[DisposableLike_dispose]();

  return returns(publisher);
})();

export default EventPublisher_disposed;
