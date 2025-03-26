import { Predicate, partial, pipe } from "../../../functions.js";
import { ConsumerLike } from "../../../utils.js";
import type * as Producer from "../../Producer.js";
import * as ForEachOperator from "../../__internal__/operators/ForEachOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_forEach: Producer.Signature["forEach"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    ForEachOperator.create<ConsumerLike, T>,
    partial(predicate),
    Producer_lift<T, T>(),
  )) as Producer.Signature["forEach"];

export default Producer_forEach;
