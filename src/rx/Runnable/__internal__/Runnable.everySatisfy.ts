import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { EverySatisfy } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_everySatisfyMixin from "../../Sink/__internal__/Sink.everySatisfyMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedEverySatisfySinkMixin = Sink_everySatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray_toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedEverySatisfySinkMixin),
        partial(predicate),
        Runnable_lift,
      );
  })();

export default Runnable_everySatisfy;
