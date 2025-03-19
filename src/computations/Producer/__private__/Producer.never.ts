import { ComputationLike_isSynchronous } from "../../../computations.js";
import { ignore, returns } from "../../../functions.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

const Producer_never: Producer.Signature["never"] = /*@__PURE__*/ (() =>
  returns(
    Source.create(ignore, {
      [ComputationLike_isSynchronous]: false,
    }),
  ))() as Producer.Signature["never"];

export default Producer_never;
