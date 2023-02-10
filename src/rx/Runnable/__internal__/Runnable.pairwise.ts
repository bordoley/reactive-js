import { createInstanceFactory } from "../../../__internal__/mixins";
import { Pairwise } from "../../../containers";
import { pipe, returns } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_pairwiseMixin from "../../Sink/__internal__/Sink.pairwiseMixin";
import Runnable_lift from "./Runnable.lift";

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
