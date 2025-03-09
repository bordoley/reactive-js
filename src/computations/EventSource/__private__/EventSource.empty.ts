import { DisposableLike_dispose, EventListenerLike } from "../../../utils.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_create from "./EventSource.create.js";

const EventSource_empty: EventSource.Signature["empty"] = () =>
  EventSource_create(async (listener: EventListenerLike) => {
    await Promise.resolve();

    listener[DisposableLike_dispose]();
  });

export default EventSource_empty;
