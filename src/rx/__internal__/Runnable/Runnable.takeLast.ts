import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeLast } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import StatefulContainer$takeLast from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeLast";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink$takeLastMixin from "../Sink/Sink.takeLastMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$takeLast: TakeLast<RunnableLike>["takeLast"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedTakeLastSinkMixin = Sink$takeLastMixin<
    RunnableLike<T>,
    SinkLike<T>,
    T
  >(ReadonlyArray$toRunnable());

  return pipe(
    createInstanceFactory(typedTakeLastSinkMixin),
    StatefulContainer$takeLast<RunnableLike, T, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$takeLast;
