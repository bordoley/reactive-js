import { returns } from "../../functions.js";
import type * as EventSource from "./../../EventSource.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_mapTo: EventSource.Signature["mapTo"] = <T>(v: T) =>
  EventSource_map(returns(v));

export default EventSource_mapTo;
