import { createInstanceFactory } from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainer_scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink_scanMixin from "../Sink/Sink.scanMixin";
import Runnable_liftT from "./Runnable.liftT";

const Runnable_scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedScanSinkMixin = Sink_scanMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    StatefulContainer_scan<RunnableLike, T, TAcc, TReactive>(Runnable_liftT),
  );
})();

export default Runnable_scan;
