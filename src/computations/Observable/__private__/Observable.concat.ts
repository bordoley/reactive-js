import { ComputationModuleLike_computationType } from "../../../computations.js";
import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";
import { Observable_genPure } from "./Observable.gen.js";

const m: {
  genPure: Observable.Signature["genPure"];
  createDelegatingNotifyOnlyNonCompletingNonDisposing: typeof Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing;
  [ComputationModuleLike_computationType]?: Observable.Computation;
} = {
  genPure: Observable_genPure,
  createDelegatingNotifyOnlyNonCompletingNonDisposing:
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
};

const Observable_concat: Observable.Signature["concat"] =
  /*@__PURE__*/ DeferredSource.creatConcat(m) as Observable.Signature["concat"];

export default Observable_concat;
