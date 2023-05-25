import type * as EventSource from "../../EventSource.js";
import { pickUnsafe } from "../../functions.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_pick: EventSource.Signature["pick"] = (
  ...keys: (string | number | symbol)[]
) => EventSource_map(pickUnsafe(...keys));

export default EventSource_pick;
