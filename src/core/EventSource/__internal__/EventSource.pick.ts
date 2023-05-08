import { Container, EventSourceContainer } from "../../../core.js";
import Container_pick from "../../../core/Container/__internal__/Container.pick.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: Container.Pick<EventSourceContainer>["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
