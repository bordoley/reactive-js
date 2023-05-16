import type * as Enumerator from "../../Enumerator.js";
import ReadonlyArray_enumerate from "../../ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import { pipe, returns } from "../../functions.js";

const Enumerator_fromValue: Enumerator.Signature["fromValue"] =
  /*@__PURE__*/ returns(v => pipe([v], ReadonlyArray_enumerate()));

export default Enumerator_fromValue;
