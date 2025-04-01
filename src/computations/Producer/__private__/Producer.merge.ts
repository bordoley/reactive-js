import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Producer_merge: Producer.Signature["merge"] =
  /*@__PURE__*/ DeferredReactiveSource.merge(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Producer.Signature["merge"];

export default Producer_merge;
