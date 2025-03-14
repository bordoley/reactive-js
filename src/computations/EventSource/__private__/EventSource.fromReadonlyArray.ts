import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromReadonlyArray: EventSource.Signature["fromReadonlyArray"] =
  (<T>(options?: { count?: number; start?: number }) =>
    (arr: readonly T[]) => {
      let [start, count] = parseArrayBounds(arr, options);

      return EventSource_create(async (listener: EventListenerLike<T>) => {
        await Promise.resolve();

        while (count !== 0 && !listener[DisposableLike_isDisposed]) {
          // Will never throw.
          listener[EventListenerLike_notify](arr[start]);

          count > 0 ? (start++, count--) : (start--, count++);

          if (!listener[DisposableLike_isDisposed] && count !== 0) {
            await Promise.resolve();
          }
        }
        listener[DisposableLike_dispose]();
      });
    }) as EventSource.Signature["fromReadonlyArray"];

export default EventSource_fromReadonlyArray;
