import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainer_takeFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.takeFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_takeFirstMixin from "../../Sink/__internal__/Sink.takeFirstMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeFirstSinkMixin = Sink_takeFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeFirstSinkMixin),
      StatefulContainer_takeFirst<RunnableLike, T, TReactive>(Runnable_liftT),
    );
  })();

export default Runnable_takeFirst;
