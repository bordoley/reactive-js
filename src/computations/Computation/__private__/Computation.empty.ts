import { bindMethod, memoize, returns } from "../../../functions.js";
import type * as Computation from "../../Computation.js";

const Computation_empty: Computation.Signature["empty"] = /*@__PURE__*/ memoize(
  m => returns(m.genPure(bindMethod([], Symbol.iterator))),
);

export default Computation_empty;
