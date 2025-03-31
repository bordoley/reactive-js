import { ComputationLike, PureComputationLike } from "../../../computations.js";
import type * as Computation from "../../Computation.js";
import Computation_isPure from "./Computation.isPure.js";

const Computation_areAllPure: Computation.Signature["areAllPure"] = <
  TComputationType extends Partial<ComputationLike>,
>(
  computations: readonly TComputationType[],
): computations is readonly (TComputationType & PureComputationLike)[] =>
  computations.every(Computation_isPure);

export default Computation_areAllPure;
