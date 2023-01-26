import { createInstanceFactory } from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainer_keep from "../../../containers/__internal__/StatefulContainer/StatefulContainer.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_keepMixin from "../Sink/Sink.keepMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = Sink_keepMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    StatefulContainer_keep<RunnableLike, T, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_keep;
