import { EventSourceLike } from "../../../computations.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_latest from "./EventSource.latest.js";

const EventSource_zipLatest: EventSource.Signature["zipLatest"] = ((
  ...observables: readonly EventSourceLike<any>[]
) => EventSource_latest(observables, 2)) as EventSource.Signature["zipLatest"];

export default EventSource_zipLatest;
