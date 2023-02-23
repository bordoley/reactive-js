import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Scan } from "../../../containers.js";
import StatefulContainer_scan from "../../../containers/StatefulContainer/__internal__/StatefulContainer.scan.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_scanMixin from "../../Sink/__internal__/Sink.scanMixin.js";
import Runnable_liftT from "./Runnable.liftT.js";

const Runnable_scan: Scan<RunnableLike>["scan"] = /*@__PURE__*/ (<
  T,
  TAcc,
>() => {
  const typedScanSinkMixin = Sink_scanMixin<T, TAcc>();

  return pipe(
    createInstanceFactory(typedScanSinkMixin),
    StatefulContainer_scan<RunnableLike, T, TAcc>(Runnable_liftT),
  );
})();

export default Runnable_scan;
