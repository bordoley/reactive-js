import type * as EventSource from "../../EventSource.js";
import { Function1, compose } from "../../functions.js";
import EventSource_flattenIterable from "./EventSource.flattenIterable.js";
import EventSource_map from "./EventSource.map.js";

const EventSource_flatMapIterable: EventSource.Signature["flatMapIterable"] = <
  TA,
  TB,
>(
  selector: Function1<TA, Iterable<TB>>,
) => compose(EventSource_map(selector), EventSource_flattenIterable());

export default EventSource_flatMapIterable;
