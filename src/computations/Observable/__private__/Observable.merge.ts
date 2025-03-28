import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Observable_merge: Observable.Signature["merge"] =
  /*@__PURE__*/ DeferredSource.merge(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Observable.Signature["merge"];

export default Observable_merge;
