import { createInstanceFactory } from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArray$toRunnable from "../../../containers/__internal__/ReadonlyArray/ReadonlyArray.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink$someSatisfyMixin from "../Sink/Sink.someSatisfyMixin";
import Runnable$lift from "./Runnable.lift";

const Runnable$someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSomeSatisfySinkMixin = Sink$someSatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArray$toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedSomeSatisfySinkMixin),
        partial(predicate),
        Runnable$lift,
      );
  })();

export default Runnable$someSatisfy;
