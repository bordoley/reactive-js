import { Predicate, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as KeepOperator from "../../__internal__/operators/KeepOperator.js";
import Producer_lift from "./Producer.lift.js";

const Producer_keep: Producer.Signature["keep"] = (<T>(
  predicate: Predicate<T>,
) =>
  pipe(
    KeepOperator.create<T>,
    partial(predicate),
    Producer_lift<T, T>(),
  )) as Producer.Signature["keep"];

export default Producer_keep;
