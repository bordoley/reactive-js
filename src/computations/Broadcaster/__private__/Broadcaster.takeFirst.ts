import { partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeFirst: Broadcaster.Signature["takeFirst"] = (<
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstSink.create<SinkLike, T>,
    partial(options?.count),
    Broadcaster_lift,
  )) as Broadcaster.Signature["takeFirst"];

export default Broadcaster_takeFirst;
