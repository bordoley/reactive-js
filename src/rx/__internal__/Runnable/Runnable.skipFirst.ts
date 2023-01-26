import { createInstanceFactory } from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainer$skipFirst from "../../../containers/__internal__/StatefulContainer/StatefulContainer.skipFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$skipFirstMixin from "../Sink/Sink.skipFirstMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedSkipFirstSinkMixin = Sink$skipFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedSkipFirstSinkMixin),
      StatefulContainer$skipFirst<RunnableLike, T, TReactive>(Runnable$liftT),
    );
  })();

export default Runnable$skipFirst;
