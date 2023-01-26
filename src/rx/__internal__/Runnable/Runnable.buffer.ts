import { createInstanceFactory } from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import StatefulContainer$buffer from "../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink$bufferMixin from "../Sink/Sink.bufferMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$buffer: Buffer<RunnableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedBufferSinkMixin = Sink$bufferMixin<
    RunnableLike,
    SinkLike<readonly T[]>,
    T
  >(ReadonlyArray$toRunnable());

  return pipe(
    createInstanceFactory(typedBufferSinkMixin),
    StatefulContainer$buffer<RunnableLike, T, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$buffer;
