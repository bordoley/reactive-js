import { createInstanceFactory } from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import StatefulContainerLike__buffer from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__bufferMixin from "../SinkLike/SinkLike.bufferMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__buffer: Buffer<RunnableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedBufferSinkMixin = SinkLike__bufferMixin<
    RunnableLike,
    SinkLike<readonly T[]>,
    T
  >(ReadonlyArrayLike__toRunnable());

  return pipe(
    createInstanceFactory(typedBufferSinkMixin),
    StatefulContainerLike__buffer<RunnableLike, T, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__buffer;
