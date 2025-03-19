import {
  ComputationLike_isPure,
  HigherOrderInnerComputationLike,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as SwitchAll from "../../__internal__/operators/SwitchAll.js";
import Producer_lift from "./Producer.lift.js";

const Producer_switchAll: Producer.Signature["switchAll"] = ((options?: {
  readonly innerType?: HigherOrderInnerComputationLike;
}) =>
  pipe(
    SwitchAll.createConsumer,
    Producer_lift({
      [ComputationLike_isPure]: Computation.isPure(options?.innerType ?? {}),
    }),
  )) as Producer.Signature["switchAll"];

export default Producer_switchAll;
