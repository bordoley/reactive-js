import * as Consumer from "../../../utils/__internal__/Consumer.js";
import type * as Producer from "../../Producer.js";
import * as DeferredEventSource from "../../__internal__/DeferredEventSource.js";

const Producer_concat: Producer.Signature["concat"] =
  /*@__PURE__*/ DeferredEventSource.concat(
    Consumer.createDelegatingNonCompleting,
  ) as Producer.Signature["concat"];

export default Producer_concat;
