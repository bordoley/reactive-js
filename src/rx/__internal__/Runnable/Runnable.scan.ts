import { createInstanceFactory } from "../../../__internal__/mixins";
import { Scan } from "../../../containers";
import StatefulContainer$scan from "../../../containers/__internal__/StatefulContainer/StatefulContainer.scan";
import { TReactive } from "../../../containers/__internal__/containers.internal";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Sink$scanMixin from "../Sink/Sink.scanMixin";
import Runnable$liftT from "./Runnable.liftT";

const Runnable$scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedScanSinkMixin = Sink$scanMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    StatefulContainer$scan<RunnableLike, T, TAcc, TReactive>(Runnable$liftT),
  );
})();

export default Runnable$scan;
