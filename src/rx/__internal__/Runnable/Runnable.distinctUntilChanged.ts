import { createInstanceFactory } from "../../../__internal__/mixins";
import { DistinctUntilChanged } from "../../../containers";
import StatefulContainer$distinctUntilChanged from "../../../containers/__internal__/StatefulContainer/StatefulContainer.distinctUntilChanged";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$distinctUntilChangedMixin from "../Sink/Sink.distinctUntilChangedMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      Sink$distinctUntilChangedMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      StatefulContainer$distinctUntilChanged<RunnableLike, T, TReactive>(
        Runnable$liftT,
      ),
    );
  })();

export default Runnable$distinctUntilChanged;
