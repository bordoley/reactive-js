import { Factory, Updater, error, none } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_generate: EventSource.Signature["generate"] = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: {
    readonly count?: number;
    readonly delay?: number;
    readonly delayStart?: boolean;
  },
) =>
  EventSource_create(async (listener: EventListenerLike) => {
    const { count } = options ?? {};
    let acc = initialValue();
    let cnt = 0;

    await Promise.resolve();

    while (!listener[DisposableLike_isDisposed]) {
      acc = generator(acc);
      try {
        listener[EventListenerLike_notify](acc);
      } catch (e) {
        listener[DisposableLike_dispose](error(e));
        break;
      }

      if (count !== none && (cnt++, cnt >= count)) {
        break;
      }

      if (!listener[DisposableLike_isDisposed]) {
        await Promise.resolve();
      } else {
        break;
      }
    }
    listener[DisposableLike_dispose]();
  });

export default EventSource_generate;
