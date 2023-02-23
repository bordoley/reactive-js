import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Keep } from "../../../containers.js";
import StatefulContainer_keep from "../../../containers/StatefulContainer/__internal__/StatefulContainer.keep.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Sink_keepMixin from "../../Sink/__internal__/Sink.keepMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_keep: Keep<RunnableLike>["keep"] = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = Sink_keepMixin<T>();

  return pipe(
    createInstanceFactory(typedKeepSinkMixin),
    StatefulContainer_keep<RunnableLike, T>(Runnable_lift),
  );
})();

export default Runnable_keep;
