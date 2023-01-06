import { createInstanceFactory } from "../../../__internal__/mixins";
import { SomeSatisfy } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__someSatisfyMixin from "../SinkLike/SinkLike.someSatisfyMixin";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__someSatisfy: SomeSatisfy<RunnableLike>["someSatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedSomeSatisfySinkMixin = SinkLike__someSatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedSomeSatisfySinkMixin),
        partial(predicate),
        RunnableLike__lift,
      );
  })();

export default RunnableLike__someSatisfy;
