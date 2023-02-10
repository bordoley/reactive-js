import { createInstanceFactory } from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_throwIfEmptyMixin from "../../Sink/__internal__/Sink.throwIfEmptyMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedThrowIfEmptySinkMixin = Sink_throwIfEmptyMixin<T>();
    return pipe(
      createInstanceFactory(typedThrowIfEmptySinkMixin),
      StatefulContainer_throwIfEmpty<RunnableLike, T, TReactive>(
        Runnable_liftT,
      ),
    );
  })();

export default Runnable_throwIfEmpty;
