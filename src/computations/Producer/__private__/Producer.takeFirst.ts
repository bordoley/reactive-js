import { partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as TakeFirstSink from "../../__internal__/sinks/TakeFirstSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeFirst: Producer.Signature["takeFirst"] = (<T>(options?: {
  count?: number;
}) =>
  pipe(
    TakeFirstSink.create<ConsumerLike, T>,
    partial(options?.count),
    Producer_lift<T, T>(),
  )) as Producer.Signature["takeFirst"];

export default Producer_takeFirst;
