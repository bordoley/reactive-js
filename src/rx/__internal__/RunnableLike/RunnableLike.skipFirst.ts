import { createInstanceFactory } from "../../../__internal__/mixins";
import { SkipFirst } from "../../../containers";
import StatefulContainerLike__skipFirst from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.skipFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__skipFirstMixin from "../SinkLike/SinkLike.skipFirstMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__skipFirst: SkipFirst<RunnableLike>["skipFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedSkipFirstSinkMixin = SinkLike__skipFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedSkipFirstSinkMixin),
      StatefulContainerLike__skipFirst<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__skipFirst;
