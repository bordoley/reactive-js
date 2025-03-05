import { EventSourceLike } from "../../../events.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_latest from "./EventSource.latest.js";

const EventSource_combineLatest: EventSource.Signature["combineLatest"] = ((
  ...observables: readonly EventSourceLike<any>[]
) =>
  EventSource_latest(observables, 1)) as EventSource.Signature["combineLatest"];

export default EventSource_combineLatest;
