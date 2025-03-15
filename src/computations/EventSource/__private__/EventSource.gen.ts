import { Factory, error } from "../../../functions.js";
import {
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_gen: EventSource.Signature["gen"] = (<T>(
  factory: Factory<Generator<T>>,
) =>
  EventSource_create(async (listener: EventListenerLike) => {
    await Promise.resolve();

    const iter = factory();

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
  })) as EventSource.Signature["gen"];

export default EventSource_gen;
