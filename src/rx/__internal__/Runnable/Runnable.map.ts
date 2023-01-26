import { createInstanceFactory } from "../../../__internal__/mixins";
import { Map } from "../../../containers";
import StatefulContainer$map from "../../../containers/__internal__/StatefulContainer/StatefulContainer.map";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$mapMixin from "../Sink/Sink.mapMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$map: Map<RunnableLike>["map"] = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = Sink$mapMixin<TA, TB>();

  return pipe(
    createInstanceFactory(typedMapSinkMixin),
    StatefulContainer$map<RunnableLike, TA, TB, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$map;
