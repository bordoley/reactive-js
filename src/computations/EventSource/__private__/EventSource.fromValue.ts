import { returns } from "../../../functions.js";
import {
  DisposableLike_dispose,
  EventListenerLike,
  EventListenerLike_notify,
} from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_fromValue: EventSource.Signature["fromValue"] =
  /*@__PURE__*/ returns((v: unknown) =>
    EventSource_create(async (listener: EventListenerLike) => {
      await Promise.resolve();

      // Will never throw.
      listener[EventListenerLike_notify](v);

      listener[DisposableLike_dispose]();
    }),
  ) as EventSource.Signature["fromValue"];

export default EventSource_fromValue;
