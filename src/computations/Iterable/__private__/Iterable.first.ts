import { IterableLike } from "../../../computations.js";
import { none, returns } from "../../../functions.js";
import type * as Iterable from "../../Iterable.js";

const Iterable_first: Iterable.Signature["first"] = /*@__PURE__*/ returns(
  (iter: IterableLike) => {
    for (const v of iter) {
      return v;
    }
    return none;
  },
) as Iterable.Signature["first"];

export default Iterable_first;
