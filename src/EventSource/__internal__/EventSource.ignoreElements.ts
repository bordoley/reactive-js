import Container_ignoreElements from "../../Container/__internal__/Container.ignoreElements.js";
import { Containers, EventSourceContainer } from "../../containers.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_ignoreElements: Containers.TypeClass<EventSourceContainer>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(EventSource_keep);

export default EventSource_ignoreElements;
