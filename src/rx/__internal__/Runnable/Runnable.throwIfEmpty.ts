import { createInstanceFactory } from "../../../__internal__/mixins";
import { ThrowIfEmpty } from "../../../containers";
import StatefulContainer$throwIfEmpty from "../../../containers/__internal__/StatefulContainer/StatefulContainer.throwIfEmpty";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$throwIfEmptyMixin from "../Sink/Sink.throwIfEmptyMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$throwIfEmpty: ThrowIfEmpty<RunnableLike>["throwIfEmpty"] =
  /*@__PURE__*/ (<T>() => {
    const typedThrowIfEmptySinkMixin = Sink$throwIfEmptyMixin<T>();
    return pipe(
      createInstanceFactory(typedThrowIfEmptySinkMixin),
      StatefulContainer$throwIfEmpty<RunnableLike, T, TReactive>(
        Runnable$liftT,
      ),
    );
  })();

export default Runnable$throwIfEmpty;
