import { Pick } from "../../../containers.js";
import Container_pick from "../../../containers/Container/__internal__/Container.pick.js";
import { EventSourceLike } from "../../../util.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: Pick<EventSourceLike>["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
