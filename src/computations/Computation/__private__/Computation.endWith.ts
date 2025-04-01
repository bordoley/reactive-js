import {
  ComputationModule,
  ComputationOfModule,
  ComputationTypeLike,
  PickComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import { pipe } from "../../../functions.js";
import type * as Computation from "../../Computation.js";
import Computation_fromReadonlyArray from "./Computation.fromReadonlyArray.js";

const Computation_endWith: Computation.Signature["endWith"] = (<
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
    m.concat(
      computation,
      pipe(values, Computation_fromReadonlyArray(m)),
    )) as Computation.Signature["endWith"];

export default Computation_endWith;
