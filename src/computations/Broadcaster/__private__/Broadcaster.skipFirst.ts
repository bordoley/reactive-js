import { partial, pipe } from "../../../functions.js";
import type * as Broadcaster from "../../Broadcaster.js";
import * as SkipFirstSink from "../../__internal__/sinks/SkipFirstSink.js";
import Broadcaster_lift from "./Broadcaster.lift.js";

const Broadcaster_skipFirst: Broadcaster.Signature["skipFirst"] = (<
  T,
>(options?: {
  count?: number;
}) =>
  pipe(
    SkipFirstSink.create,
    partial(options?.count),
    Broadcaster_lift<T, T>,
  )) as Broadcaster.Signature["skipFirst"];

export default Broadcaster_skipFirst;
