import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Pairwise } from "../../../containers.js";
import { pipe, returns } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_pairwise: Pairwise<RunnableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedPairwiseSinkMixin = Sink_pairwiseMixin<T>();

  return pipe(
    createInstanceFactory(typedPairwiseSinkMixin),
    Runnable_lift,
    returns,
  );
})();

export default Runnable_pairwise;
