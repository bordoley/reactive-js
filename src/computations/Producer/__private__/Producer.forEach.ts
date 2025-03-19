import { ComputationLike_isPure } from "../../../computations.js";
import { SideEffect1, partial, pipe } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as ForEach from "../../__internal__/operators/ForEach.js";
import Producer_lift from "./Producer.lift.js";

const Producer_forEach: Producer.Signature["forEach"] = <T>(
  predicate: SideEffect1<T>,
) =>
  pipe(
    ForEach.createConsumer,
    partial(predicate),
    Producer_lift<T, T>({
      [ComputationLike_isPure]: false,
    }),
  );

export default Producer_forEach;
