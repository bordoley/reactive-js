import {
  ComputationModule,
  ComputationOfModule,
  ComputationTypeLike,
  PickComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Computation from "../../Computation.js";
import Computation_concatWith from "./Computation.concatWith.js";
import Computation_fromReadonlyArray from "./Computation.fromReadonlyArray.js";

const Computation_startWith: Computation.Signature["startWith"] = (<
    T,
    TComputationType extends ComputationTypeLike,
    TComputationModule extends PickComputationModule<
      SequentialComputationModule<TComputationType> &
        ComputationModule<TComputationType>,
      "concat" | "genPure"
    >,
  >(
    m: TComputationModule,
    ...values: readonly T[]
  ) =>
  (computation: ComputationOfModule<typeof m, T>) =>
    pipe(
      values,
      Computation_fromReadonlyArray(m),
      Computation_concatWith(m, computation),
    )) as Computation.Signature["startWith"];

export default Computation_startWith;
