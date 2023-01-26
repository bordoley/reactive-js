import { createInstanceFactory } from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_someSatisfyMixin from "../Sink/Sink.someSatisfyMixin";
import Runnable_lift from "./Runnable.lift";

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
