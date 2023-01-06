import { createInstanceFactory } from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainerLike__scan from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import SinkLike__scanMixin from "../SinkLike/SinkLike.scanMixin";
import RunnableLike__liftT from "./RunnableLike.liftT";

const RunnableLike__scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedScanSinkMixin = SinkLike__scanMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    StatefulContainerLike__scan<RunnableLike, T, TAcc, TReactive>(
      RunnableLike__liftT,
    ),
  );
})();

export default RunnableLike__scan;
