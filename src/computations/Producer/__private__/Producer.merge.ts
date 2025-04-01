import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_merge: Producer.Signature["merge"] =
  /*@__PURE__*/ DeferredEventSource.merge(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Producer.Signature["merge"];

export default Producer_merge;
