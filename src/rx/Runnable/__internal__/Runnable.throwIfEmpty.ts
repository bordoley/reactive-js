import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { ThrowIfEmpty } from "../../../containers.js";
import StatefulContainer_throwIfEmpty from "../../../containers/StatefulContainer/__internal__/StatefulContainer.throwIfEmpty.js";
import { TReactive } from "../../../containers/__internal__/containers.internal.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_throwIfEmptyMixin from "../../Sink/__internal__/Sink.throwIfEmptyMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

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
