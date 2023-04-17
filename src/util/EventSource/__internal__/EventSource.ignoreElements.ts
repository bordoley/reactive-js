import { IgnoreElements } from "../../../containers.js";
import Container_ignoreElements from "../../../containers/Container/__internal__/Container.ignoreElements.js";
import { EventSourceLike } from "../../../util.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_ignoreElements: IgnoreElements<EventSourceLike>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(EventSource_keep);

export default EventSource_ignoreElements;
