import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  DeferredProducerLike,
  PureDeferredProducerLike,
  StreamableLike_stream,
} from "../../../computations.js";
import { Function1 } from "../../../functions.js";

import type * as Streamable from "../../Streamable.js";
import StreamMixin from "../../__mixins__/StreamMixin.js";

const Streamable_create: Streamable.Signature["create"] = /*@__PURE__*/ (<
  TReq,
  T,
>() => {
  const Stream_create = createInstanceFactory(StreamMixin<TReq, T>());

  return (
    op: Function1<PureDeferredProducerLike<TReq>, DeferredProducerLike<T>>,
  ) => ({
    [StreamableLike_stream]: options => Stream_create(op, options),
  });
})();

export default Streamable_create;
