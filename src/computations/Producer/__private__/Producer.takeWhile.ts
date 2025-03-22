import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as TakeWhileMixin from "../../__internal__/operators/TakeWhile.js";
import Producer_lift from "./Producer.lift.js";

const Producer_takeWhile: Producer.Signature["takeWhile"] = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
) =>
  pipe(
    TakeWhileMixin.createConsumer,
    partial(predicate, options),
    Producer_lift<T, T>(),
  );

export default Producer_takeWhile;
