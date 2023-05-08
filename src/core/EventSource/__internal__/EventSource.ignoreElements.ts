import { Container, EventSourceContainer } from "../../../core.js";
import Container_ignoreElements from "../../../core/Container/__internal__/Container.ignoreElements.js";
import EventSource_keep from "./EventSource.keep.js";

const EventSource_ignoreElements: Container.TypeClass<EventSourceContainer>["ignoreElements"] =
  /*@__PURE__*/ Container_ignoreElements(EventSource_keep);

export default EventSource_ignoreElements;
