import { DeferredComputationOfModule } from "../../../computations.js";
import { memoize } from "../../../functions.js";
import type * as Computation from "../../Computation.js";

const Computation_concatWith: Computation.Signature["concatWith"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(...tail: DeferredComputationOfModule<typeof m, T>[]) =>
      (fst: DeferredComputationOfModule<typeof m, T>) =>
        m.concat(fst, ...tail),
  ) as Computation.Signature["concatWith"];

export default Computation_concatWith;
