import { partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as TakeFirstMixin from "../../__internal__/operators/TakeFirst.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_takeFirst: Broadcaster.Signature["takeFirst"] = <
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstMixin.createListener<T>,
    partial(options?.count),
    Broadcaster_lift,
  );

export default Broadcaster_takeFirst;
