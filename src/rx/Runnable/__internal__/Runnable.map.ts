import { createInstanceFactory } from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = Sink_mapMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    StatefulContainer_map<RunnableLike, TA, TB, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_map;
