import {
  ComputationLike,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import { Optional } from "../../../functions.js";
import type * as Computation from "../../Computation.js";

const Computation_isSynchronous: Computation.Signature["isSynchronous"] = <
  TComputationType extends Partial<ComputationLike>,
>(
  computation: TComputationType,
): computation is TComputationType & {
  [ComputationLike_isSynchronous]: Optional<true>;
} => computation[ComputationLike_isSynchronous] ?? true;

export default Computation_isSynchronous;
