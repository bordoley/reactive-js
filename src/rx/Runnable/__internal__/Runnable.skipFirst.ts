import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { SkipFirst } from "../../../containers.js";
import StatefulContainer_skipFirst from "../../../containers/StatefulContainer/__internal__/StatefulContainer.skipFirst.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_skipFirstMixin from "../../Sink/__internal__/Sink.skipFirstMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedSkipFirstSinkMixin = Sink_skipFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedSkipFirstSinkMixin),
      StatefulContainer_skipFirst<RunnableLike, T>(Runnable_liftT),
    );
  })();

export default Runnable_skipFirst;
