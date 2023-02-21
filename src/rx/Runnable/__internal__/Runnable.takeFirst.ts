import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { TakeFirst } from "../../../containers.js";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeFirstSinkMixin = Sink_takeFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeFirstSinkMixin),
      StatefulContainer_takeFirst<RunnableLike, T, TReactive>(Runnable_liftT),
    );
  })();

export default Runnable_takeFirst;
