import { Predicate, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as ForEachSink from "../../__internal__/sinks/ForEachSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_forEach: Producer.Signature["forEach"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    ForEachSink.create<ConsumerLike, T>,
    partial(predicate),
    Producer_lift<T, T>(),
  )) as Producer.Signature["forEach"];

export default Producer_forEach;
