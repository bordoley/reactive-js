import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { DistinctUntilChanged } from "../../../containers.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      Sink_distinctUntilChangedMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      StatefulContainer_distinctUntilChanged<RunnableLike, T, TReactive>(
        Runnable_liftT,
      ),
    );
  })();

export default Runnable_distinctUntilChanged;
