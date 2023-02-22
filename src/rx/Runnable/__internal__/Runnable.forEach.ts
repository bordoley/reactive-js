import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ForEach } from "../../../containers.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

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
