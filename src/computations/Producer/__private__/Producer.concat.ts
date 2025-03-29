import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredSource from "../../__internal__/DeferredSource.js";

const Producer_concat: Producer.Signature["concat"] =
  /*@__PURE__*/ DeferredSource.concat(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Producer.Signature["concat"];

export default Producer_concat;
