import { partial, pipe } from "../../../functions.js";
import { SinkLike } from "../../../utils.js";
import type * as Runnable from "../../Runnable.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_takeFirst: Runnable.Signature["takeFirst"] = <T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstSink.create<SinkLike, T>,
    partial(options?.count),
    Runnable_lift<T, T>(),
  );

export default Runnable_takeFirst;
