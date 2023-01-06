import { createInstanceFactory } from "../../../__internal__/mixins";
import { Keep } from "../../../containers";
import StatefulContainerLike__keep from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.keep";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__keepMixin from "../SinkLike/SinkLike.keepMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = SinkLike__keepMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    StatefulContainerLike__keep<RunnableLike, T, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__keep;
