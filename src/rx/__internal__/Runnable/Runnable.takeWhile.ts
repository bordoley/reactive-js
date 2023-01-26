import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeWhile } from "../../../containers";
import StatefulContainer$takeWhile from "../../../containers/__internal__/StatefulContainer/StatefulContainer.takeWhile";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$takeWhileMixin from "../Sink/Sink.takeWhileMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$takeWhile: TakeWhile<RunnableLike>["takeWhile"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeWhileSinkMixin = Sink$takeWhileMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeWhileSinkMixin),
      StatefulContainer$takeWhile<RunnableLike, T, TReactive>(Runnable$liftT),
    );
  })();

export default Runnable$takeWhile;
