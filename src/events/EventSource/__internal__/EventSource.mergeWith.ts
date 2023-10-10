import { EventSourceLike } from "../../../events.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_mergeMany from "./EventSource.mergeMany.js";

const EventSource_mergeWith: EventSource.Signature["mergeWith"] =
  <T>(snd: EventSourceLike<T>, ...tail: readonly EventSourceLike<T>[]) =>
  (fst: EventSourceLike<T>) =>
    EventSource_mergeMany<T>([fst, snd, ...tail]);

export default EventSource_mergeWith;
