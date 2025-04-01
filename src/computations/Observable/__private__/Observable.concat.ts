import * as Observer from "../../../utils/__internal__/Observer.js";
import type * as Observable from "../../Observable.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Observable_concat: Observable.Signature["concat"] =
  /*@__PURE__*/ DeferredReactiveSource.concat(
    Observer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Observable.Signature["concat"];

export default Observable_concat;
