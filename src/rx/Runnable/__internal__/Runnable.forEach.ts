import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ForEach } from "../../../containers.js";
import StatefulContainer_forEach from "../../../containers/StatefulContainer/__internal__/StatefulContainer.forEach.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_forEachMixin from "../../Sink/__internal__/Sink.forEachMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_forEach: ForEach<RunnableLike>["forEach"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedForEachSinkMixin = Sink_forEachMixin<T>();

  return pipe(
    createInstanceFactory(typedForEachSinkMixin),
    StatefulContainer_forEach<RunnableLike, T>(Runnable_lift),
  );
})();

export default Runnable_forEach;
