import { partial, pipe } from "../../../functions.js";
import { EventListenerLike } from "../../../utils.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeFirstOperator from "../../__internal__/operators/TakeFirstOperator.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeFirst: Broadcaster.Signature["takeFirst"] = (<
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstOperator.create<EventListenerLike, T>,
    partial(options?.count),
    Broadcaster_lift,
  )) as Broadcaster.Signature["takeFirst"];

export default Broadcaster_takeFirst;
