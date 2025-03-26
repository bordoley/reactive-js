import { ComputationModuleLike_computationType } from "../../../computations.js";
import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Producer_genPure } from "./Producer.gen.js";

const m: {
  genPure: Producer.Signature["genPure"];
  createDelegatingNotifyOnlyNonCompletingNonDisposing: typeof Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing;
  [ComputationModuleLike_computationType]?: Producer.Computation;
} = {
  genPure: Producer_genPure,
  createDelegatingNotifyOnlyNonCompletingNonDisposing:
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
};

const Producer_concat: Producer.Signature["concat"] =
  /*@__PURE__*/ DeferredSource.creatConcat(m) as Producer.Signature["concat"];

export default Producer_concat;
