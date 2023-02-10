import { createInstanceFactory } from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedSkipFirstSinkMixin = Sink_skipFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedSkipFirstSinkMixin),
      StatefulContainer_skipFirst<RunnableLike, T, TReactive>(Runnable_liftT),
    );
  })();

export default Runnable_skipFirst;
