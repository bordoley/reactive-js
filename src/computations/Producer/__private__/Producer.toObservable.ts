import {
  ComputationLike_isPure,
  ComputationLike_isSynchronous,
  ProducerLike,
  SourceLike_subscribe,
} from "../../../computations.js";
import { bindMethod, returns } from "../../../functions.js";
import * as Computation from "../../Computation.js";
import type * as Producer from "../../Producer.js";
import * as Source from "../../__internal__/Source.js";

const Producer_toObservable: Producer.Signature["toObservable"] =
  /*@__PURE__*/ returns((producer: ProducerLike) =>
    Source.create(bindMethod(producer, SourceLike_subscribe), {
      [ComputationLike_isPure]: Computation.isPure(producer),
      [ComputationLike_isSynchronous]: false,
    }),
  ) as Producer.Signature["toObservable"];

export default Producer_toObservable;
