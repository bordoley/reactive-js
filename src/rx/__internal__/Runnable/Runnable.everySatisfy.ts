import { createInstanceFactory } from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink$everySatisfyMixin from "../Sink/Sink.everySatisfyMixin";
import Runnable$lift from "./Runnable.lift";

const Runnable$everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedEverySatisfySinkMixin = Sink$everySatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray$toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedEverySatisfySinkMixin),
        partial(predicate),
        Runnable$lift,
      );
  })();

export default Runnable$everySatisfy;
