import { createInstanceFactory } from "../../../__internal__/mixins";
import { TakeFirst } from "../../../containers";
import StatefulContainerLike__takeFirst from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.takeFirst";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__takeFirstMixin from "../../__internal__/SinkLike/SinkLike.takeFirstMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__takeFirst: TakeFirst<RunnableLike>["takeFirst"] =
  /*@__PURE__*/ (<T>() => {
    const typedTakeFirstSinkMixin = SinkLike__takeFirstMixin<T>();

    return pipe(
      createInstanceFactory(typedTakeFirstSinkMixin),
      StatefulContainerLike__takeFirst<RunnableLike, T, TReactive>(
        RunnableLike__liftT,
      ),
    );
  })();

export default RunnableLike__takeFirst;
