import { createInstanceFactory } from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainerLike__map from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__mapMixin from "../SinkLike/SinkLike.mapMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<
  TA,
  TB,
>() => {
  const typedMapSinkMixin = SinkLike__mapMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    StatefulContainerLike__map<RunnableLike, TA, TB, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__map;
