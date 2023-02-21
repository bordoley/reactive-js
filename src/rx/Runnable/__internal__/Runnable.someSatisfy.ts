import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { SomeSatisfy } from "../../../containers.js";
import ReadonlyArray_toRunnable from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.toRunnable.js";
import { Predicate, partial, pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_someSatisfyMixin from "../../Sink/__internal__/Sink.someSatisfyMixin.js";
import Runnable_lift from "./Runnable.lift.js";

const Runnable_someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSomeSatisfySinkMixin = Sink_someSatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray_toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedSomeSatisfySinkMixin),
        partial(predicate),
        Runnable_lift,
      );
  })();

export default Runnable_someSatisfy;
