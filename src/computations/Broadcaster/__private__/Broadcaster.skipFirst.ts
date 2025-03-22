import { partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as SkipFirst from "../../__internal__/operators/SkipFirst.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_skipFirst: Broadcaster.Signature["skipFirst"] = <
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirst.createListener,
    partial(options?.count),
    Broadcaster_lift<T, T>,
  );

export default Broadcaster_skipFirst;
