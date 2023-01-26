import { createInstanceFactory } from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainer_forEach from "../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_forEachMixin from "../Sink/Sink.forEachMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = Sink_forEachMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    StatefulContainer_forEach<RunnableLike, T, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_forEach;
