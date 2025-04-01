import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_merge: Observable.Signature["merge"] =
  /*@__PURE__*/ DeferredEventSource.merge(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Observable.Signature["merge"];

export default Observable_merge;
