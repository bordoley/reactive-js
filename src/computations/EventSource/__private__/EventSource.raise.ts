import { Factory, error, none, raise } from "../../../functions.js";
import { DisposableLike_dispose, EventListenerLike } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_raise: EventSource.Signature["raise"] = ((options?: {
  readonly raise?: Factory<unknown>;
}) => {
  const { raise: factory = raise } = options ?? {};

  return EventSource_create(async (listener: EventListenerLike) => {
    await Promise.resolve();
    let err: unknown = none;
    try {
      err = factory();
    } catch (e) {
      err = e;
    }

    listener[DisposableLike_dispose](error(err));
  });
}) as EventSource.Signature["raise"];

export default EventSource_raise;
