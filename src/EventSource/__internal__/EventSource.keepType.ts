import type * as EventSource from "../../EventSource.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_keepType: EventSource.Signature["keepType"] =
  EventSource_keep as EventSource.Signature["keepType"];

export default EventSource_keepType;
