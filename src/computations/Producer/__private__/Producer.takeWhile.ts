import { Predicate, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as TakeWhileSink from "../../__internal__/sinks/TakeWhileSink.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeWhile: Producer.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileSink.create<ConsumerLike, T>,
    partial(predicate, options),
    Producer_lift(),
  )) as Producer.Signature["takeWhile"];

export default Producer_takeWhile;
