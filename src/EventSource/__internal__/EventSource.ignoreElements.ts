import Container_ignoreElements from "../../Container/__internal__/Container.ignoreElements.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_ignoreElements: EventSource.Signature["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(EventSource_keep);

export default EventSource_ignoreElements;
