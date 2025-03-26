import { Predicate, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as KeepSink from "../../__internal__/sinks/KeepSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_keep: Producer.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepSink.create<ConsumerLike, T>,
    partial(predicate),
    Producer_lift<T, T>(),
  )) as Producer.Signature["keep"];

export default Producer_keep;
