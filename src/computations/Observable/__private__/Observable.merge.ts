import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Observable_merge: Observable.Signature["merge"] =
  /*@__PURE__*/ DeferredReactiveSource.merge(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Observable.Signature["merge"];

export default Observable_merge;
