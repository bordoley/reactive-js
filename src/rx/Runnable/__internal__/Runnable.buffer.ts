import { createInstanceFactory } from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable";
import StatefulContainer_buffer from "../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_bufferMixin from "../../Sink/__internal__/Sink.bufferMixin";
import Runnable_liftT from "./Runnable.liftT";

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
