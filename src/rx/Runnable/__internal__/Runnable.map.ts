import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Map } from "../../../containers.js";
import StatefulContainer_map from "../../../containers/StatefulContainer/__internal__/StatefulContainer.map.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_mapMixin from "../../Sink/__internal__/Sink.mapMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = Sink_mapMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    StatefulContainer_map<RunnableLike, TA, TB>(Runnable_liftT),
  );
})();

export default Runnable_map;
