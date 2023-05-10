import type * as EventSource from "../../EventSource.js";
import { alwaysFalse } from "../../functions.js";
import { ContainerOperator } from "../../types.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_ignoreElements: EventSource.Signature["ignoreElements"] = <
  T,
>() =>
  EventSource_keep(alwaysFalse) as ContainerOperator<
    EventSource.Type,
    unknown,
    T
  >;

export default EventSource_ignoreElements;
