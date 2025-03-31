import {
  ComputationLike,
  ComputationLike_isPure,
  PureComputationLike,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";

const Computation_isPure: Computation.Signature["isPure"] = <
  TComputationType extends Partial<ComputationLike>,
>(
  computation: TComputationType,
): computation is TComputationType & PureComputationLike =>
  computation[ComputationLike_isPure] ?? true;

export default Computation_isPure;
