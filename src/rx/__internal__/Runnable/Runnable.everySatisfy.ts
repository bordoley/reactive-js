import { createInstanceFactory } from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArray_toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_everySatisfyMixin from "../Sink/Sink.everySatisfyMixin";
import Runnable_lift from "./Runnable.lift";

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
