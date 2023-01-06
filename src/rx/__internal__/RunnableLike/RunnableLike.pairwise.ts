import { createInstanceFactory } from "../../../__internal__/mixins";
import { Pairwise } from "../../../containers";
import { pipe, returns } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__pairwiseMixin from "../SinkLike/SinkLike.pairwiseMixin";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__pairwise: Pairwise<RunnableLike>["pairwise"] =
  /*@__PURE__*/ (<T>() => {
    const typedPairwiseSinkMixin = SinkLike__pairwiseMixin<T>();

    return pipe(
      createInstanceFactory(typedPairwiseSinkMixin),
      RunnableLike__lift,
      returns,
    );
  })();

export default RunnableLike__pairwise;
