import type * as EventSource from "../../EventSource.js";
import { Function2, Tuple2, none, pipe, tuple } from "../../functions.js";
import { EventSourceLike } from "../../types.js";
import EventSource_keep from "./EventSource.keep.js";
import EventSource_pick from "./EventSource.pick.js";
import EventSource_scan from "./EventSource.scan.js";

const EventSource_keepWithKey: EventSource.Signature["keepWithKey"] = (<T>(
    predicate: Function2<T, number, boolean>,
  ) =>
  (obs: EventSourceLike<T>) =>
    pipe(
      obs,
      EventSource_scan(
        ([cnt, _], next: T) => tuple(cnt + 1, next),
        () => tuple(-1, none as T),
      ),
      EventSource_keep(([cnt, v]: Tuple2<number, T>) => predicate(v, cnt)),
      EventSource_pick(1),
    )) as EventSource.Signature["keepWithKey"];

export default EventSource_keepWithKey;
