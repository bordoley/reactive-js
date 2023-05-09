import Container_pick from "../../Container/__internal__/Container.pick.js";
import { Containers, EventSourceContainer } from "../../types.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: Containers.TypeClass<EventSourceContainer>["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
