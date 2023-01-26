import { createInstanceFactory } from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer$keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$keepMixin from "../Sink/Sink.keepMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = Sink$keepMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    StatefulContainer$keep<RunnableLike, T, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$keep;
