import type * as EventSource from "../../EventSource.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
import EventSource_map from "./EventSource.map.js";
import EventSource_scan from "./EventSource.scan.js";

const EventSource_mapWithKey: EventSource.Signature["mapWithKey"] = (<TA, TB>(
    mapper: Function2<TA, number, TB>,
  ) =>
  (obs: EventSourceLike<TA>) =>
    pipe(
      obs,
      EventSource_scan(
        ([cnt, _], next: TA) => tuple(cnt + 1, next),
        () => tuple(-1, none as TA),
      ),
      EventSource_map(([cnt, v]: Tuple2<number, TA>) => mapper(v, cnt)),
    )) as EventSource.Signature["mapWithKey"];

export default EventSource_mapWithKey;
