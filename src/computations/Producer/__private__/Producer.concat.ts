import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredReactiveSource from "../../__internal__/DeferredReactiveSource.js";

const Producer_concat: Producer.Signature["concat"] =
  /*@__PURE__*/ DeferredReactiveSource.concat(
    Consumer.createDelegatingNotifyOnlyNonCompletingNonDisposing,
  ) as Producer.Signature["concat"];

export default Producer_concat;
