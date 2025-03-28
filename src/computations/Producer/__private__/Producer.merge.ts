import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_merge: Producer.Signature["merge"] =
  /*@__PURE__*/ DeferredSource.merge(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Producer.Signature["merge"];

export default Producer_merge;
