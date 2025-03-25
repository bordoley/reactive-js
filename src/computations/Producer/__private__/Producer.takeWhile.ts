import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as TakeWhileOperator from "../../__internal__/operators/TakeWhileOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeWhile: Producer.Signature["takeWhile"] = (<T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileOperator.create<T>,
    partial(predicate, options),
    Producer_lift(),
  )) as Producer.Signature["takeWhile"];

export default Producer_takeWhile;
