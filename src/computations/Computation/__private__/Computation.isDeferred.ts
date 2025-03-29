import {
  ComputationLike,
  ComputationLike_isDeferred,
  DeferredComputationLike,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_isDeferred: Computation.Signature["isDeferred"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & DeferredComputationLike =>
  computation[ComputationLike_isDeferred] ?? true;

export default Computation_isDeferred;
