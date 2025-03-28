import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  ObservableLike,
  PureObservableLike,
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

  return (op: Function1<PureObservableLike<TReq>, ObservableLike<T>>) => ({
    [StreamableLike_stream]: (scheduler, options) =>
      Stream_create(op, scheduler, options),
  });
})();

export default Streamable_create;
