import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Buffer } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_buffer from "../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_buffer: Buffer<RunnableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedBufferSinkMixin = Sink_bufferMixin<
    RunnableLike,
    SinkLike<readonly T[]>,
    T
  >(ReadonlyArray_toRunnable());

  return pipe(
    createInstanceFactory(typedBufferSinkMixin),
    StatefulContainer_buffer<RunnableLike, T, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_buffer;
