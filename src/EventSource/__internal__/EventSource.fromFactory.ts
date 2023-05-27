import type * as EventSource from "../../EventSource.js";
import { Factory, compose } from "../../functions.js";
import EventSource_fromValue from "./EventSource.fromValue.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_fromFactory: EventSource.Signature["fromFactory"] = (() =>
  compose(
    EventSource_fromValue(),
    EventSource_map((f: Factory<unknown>) => f()),
  )) as EventSource.Signature["fromFactory"];

export default EventSource_fromFactory;
