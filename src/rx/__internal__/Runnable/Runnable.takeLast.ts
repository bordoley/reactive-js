import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import StatefulContainer_takeLast from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_takeLastMixin from "../Sink/Sink.takeLastMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_takeLast: TakeLast<RunnableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeLastSinkMixin = Sink_takeLastMixin<
    RunnableLike<T>,
    SinkLike<T>,
    T
  >(ReadonlyArray_toRunnable());

  return pipe(
    createInstanceFactory(typedTakeLastSinkMixin),
    StatefulContainer_takeLast<RunnableLike, T, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_takeLast;
