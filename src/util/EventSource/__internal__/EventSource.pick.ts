import { Container } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import { EventSourceContainer } from "../../../util.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: Container.Pick<EventSourceContainer>["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
