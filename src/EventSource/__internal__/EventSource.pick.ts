import Container_pick from "../../Container/__internal__/Container.pick.js";
import { EventSourceContainer } from "../../containers.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: EventSourceContainer.TypeClass["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
