import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { DistinctUntilChanged } from "../../../containers.js";
import StatefulContainer_distinctUntilChanged from "../../../containers/StatefulContainer/__internal__/StatefulContainer.distinctUntilChanged.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_distinctUntilChangedMixin from "../../Sink/__internal__/Sink.distinctUntilChangedMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_distinctUntilChanged: DistinctUntilChanged<RunnableLike>["distinctUntilChanged"] =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      Sink_distinctUntilChangedMixin<T>();

    return pipe(
      createInstanceFactory(typedDistinctUntilChangedSinkMixin),
      StatefulContainer_distinctUntilChanged<RunnableLike, T>(Runnable_lift),
    );
  })();

export default Runnable_distinctUntilChanged;
