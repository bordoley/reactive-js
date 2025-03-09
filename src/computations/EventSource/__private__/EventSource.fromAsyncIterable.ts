import { AsyncIterableLike } from "../../../computations.js";
import { error, returns } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromAsyncIterable: EventSource.Signature["fromAsyncIterable"] =
  /*@__PURE__*/ returns((iter: AsyncIterableLike) =>
    EventSource_create(async (listener: EventListenerLike) => {
      try {
        for await (const v of iter) {
          if (listener[DisposableLike_isDisposed]) {
            break;
          }

          listener[EventListenerLike_notify](v);

          if (listener[DisposableLike_isDisposed]) {
            break;
          }
        }
        listener[DisposableLike_dispose]();
      } catch (e) {
        listener[DisposableLike_dispose](error(e));
      }
    }),
  ) as EventSource.Signature["fromAsyncIterable"];

export default EventSource_fromAsyncIterable;
