import {
  ComputationLike,
  ComputationLike_isSynchronous,
  SynchronousComputationLike,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_isSynchronous: Computation.Signature["isSynchronous"] = <
  TComputationType extends ComputationLike,
>(
  computation: TComputationType,
): computation is TComputationType & SynchronousComputationLike =>
  computation[ComputationLike_isSynchronous] ?? true;

export default Computation_isSynchronous;
