import { createInstanceFactory } from "../../../__internal__/mixins";
import { EverySatisfy } from "../../../containers";
import ReadonlyArrayLike__toRunnable from "../../../containers/__internal__/ReadonlyArrayLike/ReadonlyArrayLike.toRunnable";
import { Predicate, partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__everySatisfyMixin from "../SinkLike/SinkLike.everySatisfyMixin";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__everySatisfy: EverySatisfy<RunnableLike>["everySatisfy"] =
  /*@__PURE__*/ (<T>() => {
    const typedEverySatisfySinkMixin = SinkLike__everySatisfyMixin<
      RunnableLike<boolean>,
      SinkLike<boolean>,
      T
    >(ReadonlyArrayLike__toRunnable());

    return (predicate: Predicate<T>) =>
      pipe(
        createInstanceFactory(typedEverySatisfySinkMixin),
        partial(predicate),
        RunnableLike__lift,
      );
  })();

export default RunnableLike__everySatisfy;
