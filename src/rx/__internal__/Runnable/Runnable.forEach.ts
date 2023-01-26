import { createInstanceFactory } from "../../../__internal__/mixins";
import { ForEach } from "../../../containers";
import StatefulContainer$forEach from "../../../containers/__internal__/StatefulContainer/StatefulContainer.forEach";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$forEachMixin from "../Sink/Sink.forEachMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = Sink$forEachMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    StatefulContainer$forEach<RunnableLike, T, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$forEach;
