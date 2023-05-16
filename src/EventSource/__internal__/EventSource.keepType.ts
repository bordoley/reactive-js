import Container_keepType from "../../Container/__internal__/Container.keepType.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_keepType: EventSource.Signature["keepType"] =
  /*@__PURE__*/ Container_keepType<EventSource.Type>(
    EventSource_keep,
  ) as EventSource.Signature["keepType"];

export default EventSource_keepType;
