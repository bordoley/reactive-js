import { IterableLike } from "../../../computations.js";
import { error, returns } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromIterable: EventSource.Signature["fromIterable"] =
  /*@__PURE__*/ returns((iter: IterableLike) =>
    EventSource_create(async (listener: EventListenerLike) => {
      await Promise.resolve();

      try {
        for (const v of iter) {
          if (listener[DisposableLike_isDisposed]) {
            break;
          }

          listener[EventListenerLike_notify](v);

          if (!listener[DisposableLike_isDisposed]) {
            await Promise.resolve();
          } else {
            break;
          }
        }
        listener[DisposableLike_dispose]();
      } catch (e) {
        listener[DisposableLike_dispose](error(e));
      }
    }),
  ) as EventSource.Signature["fromIterable"];

export default EventSource_fromIterable;
