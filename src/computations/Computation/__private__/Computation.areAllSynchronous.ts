import {
  ComputationLike,
  ComputationLike_isSynchronous,
} from "../../../computations.js";
import type * as Computation from "../../Computation.js";
import Computation_isSynchronous from "./Computation.isSynchronous.js";

const Computation_areAllSynchronous: Computation.Signature["areAllSynchronous"] =
  <TComputationType extends Partial<ComputationLike>>(
    computations: readonly TComputationType[],
  ): computations is readonly (TComputationType & {
    [ComputationLike_isSynchronous]: true;
  })[] => computations.every(Computation_isSynchronous);

export default Computation_areAllSynchronous;
