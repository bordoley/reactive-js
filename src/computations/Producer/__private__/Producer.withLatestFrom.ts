import { ComputationLike_isPure, ProducerLike } from "../../../computations.js";
import { Function2, partial, pipe, tuple } from "../../../functions.js";

import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as WithLatestFrom from "../../__internal__/operators/WithLatestFrom.js";
import Producer_lift from "./Producer.lift.js";

const Producer_withLatestFrom: Producer.Signature["withLatestFrom"] = (<
  TA,
  TB,
  T,
>(
  other: ProducerLike<TB>,
  selector: Function2<TA, TB, T> = tuple as unknown as Function2<TA, TB, T>,
) =>
  pipe(
    WithLatestFrom.createConsumer<TA, TB, T>,
    partial(other, selector),
    Producer_lift<TA, T>({
      [ComputationLike_isPure]: Computation.isPure(other),
    }),
  )) as Producer.Signature["withLatestFrom"];

export default Producer_withLatestFrom;
