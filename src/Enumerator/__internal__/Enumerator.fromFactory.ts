import type * as Enumerator from "../../Enumerator.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe, returns } from "../../functions.js";

const Enumerator_fromFactory: Enumerator.Signature["fromFactory"] =
  /*@__PURE__*/ returns(f => pipe([f()], ReadonlyArray_enumerate()));

export default Enumerator_fromFactory;
