import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { TakeLast } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import StatefulContainer_takeLast from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeLast.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_takeLastMixin from "../../Sink/__internal__/Sink.takeLastMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

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
