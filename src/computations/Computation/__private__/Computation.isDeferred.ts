import {
  ComputationLike,
  ComputationLike_isDeferred,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_isDeferred: Computation.Signature["isDeferred"] = <
  TComputationType extends Partial<ComputationLike>,
>(
  computation: TComputationType,
): computation is TComputationType & {
  [ComputationLike_isDeferred]: true;
} => computation[ComputationLike_isDeferred] ?? true;

export default Computation_isDeferred;
