import Container_pick from "../../Container/__internal__/Container.pick.js";
import type * as EventSource from "../../EventSource.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: EventSource.Signature["pick"] =
  /*@__PURE__*/ Container_pick(EventSource_map);

export default EventSource_pick;
