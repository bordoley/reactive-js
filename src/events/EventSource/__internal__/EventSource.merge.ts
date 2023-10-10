import { EventSourceLike } from "../../../events.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_mergeMany from "./EventSource.mergeMany.js";

const EventSource_merge: EventSource.Signature["merge"] = <T>(
  ...EventSources: EventSourceLike<T>[]
) => EventSource_mergeMany<T>(EventSources);

export default EventSource_merge;
