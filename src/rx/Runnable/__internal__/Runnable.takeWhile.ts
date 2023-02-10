import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer_takeWhile from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeWhile";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_takeWhileMixin from "../../Sink/__internal__/Sink.takeWhileMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeWhileSinkMixin = Sink_takeWhileMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeWhileSinkMixin),
      StatefulContainer_takeWhile<RunnableLike, T, TReactive>(Runnable_liftT),
    );
  })();

export default Runnable_takeWhile;
