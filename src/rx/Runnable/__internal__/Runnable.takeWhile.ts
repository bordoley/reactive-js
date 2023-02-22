import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { TakeWhile } from "../../../containers.js";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeWhileSinkMixin = Sink_takeWhileMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeWhileSinkMixin),
      StatefulContainer_takeWhile<RunnableLike, T, TReactive>(Runnable_liftT),
    );
  })();

export default Runnable_takeWhile;
