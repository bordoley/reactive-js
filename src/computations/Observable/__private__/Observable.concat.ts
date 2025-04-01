import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Observable_concat: Observable.Signature["concat"] =
  /*@__PURE__*/ DeferredEventSource.concat(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Observable.Signature["concat"];

export default Observable_concat;
