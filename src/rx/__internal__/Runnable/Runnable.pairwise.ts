import { createInstanceFactory } from "../../../__internal__/mixins";
import { Pairwise } from "../../../containers";
import { pipe, returns } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$pairwiseMixin from "../Sink/Sink.pairwiseMixin";
import Runnable$lift from "./Runnable.lift";

const Runnable$pairwise: Pairwise<RunnableLike>["pairwise"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedPairwiseSinkMixin = Sink$pairwiseMixin<T>();

  return pipe(
    createInstanceFactory(typedPairwiseSinkMixin),
    Runnable$lift,
    returns,
  );
})();

export default Runnable$pairwise;
