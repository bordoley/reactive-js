import { ComputationOfModule } from "../../../computations.js";
import { memoize, pipe } from "../../../functions.js";
import type * as Computation from "../../Computation.js";
import Computation_concatWith from "./Computation.concatWith.js";
import Computation_fromReadonlyArray from "./Computation.fromReadonlyArray.js";

const Computation_startWith: Computation.Signature["startWith"] =
  /*@__PURE__*/ memoize(
    m =>
      <T>(...values: readonly T[]) =>
      (computation: ComputationOfModule<typeof m, T>) =>
        pipe(
          values,
          Computation_fromReadonlyArray(m),
          Computation_concatWith(m)<T>(computation),
        ),
  ) as Computation.Signature["startWith"];

export default Computation_startWith;
