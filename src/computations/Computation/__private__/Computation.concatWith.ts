import {
  ComputationOf,
  ComputationTypeLike,
  PickComputationModule,
  SequentialComputationModule,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_concatWith: Computation.Signature["concatWith"] =
  <TComputationType extends ComputationTypeLike, T>(
    m: PickComputationModule<
      SequentialComputationModule<TComputationType>,
      "concat"
    >,
    ...tail: ComputationOf<TComputationType, T>[]
  ) =>
  (fst: ComputationOf<TComputationType, T>) =>
    m.concat(fst, ...tail);

export default Computation_concatWith;
