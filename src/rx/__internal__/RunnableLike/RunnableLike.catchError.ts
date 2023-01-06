import { createInstanceFactory } from "../../../__internal__/mixins";
import { CatchError } from "../../../containers";
import { partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import SinkLike__catchErrorMixin from "../SinkLike/SinkLike.catchErrorMixin";
import RunnableLike__lift from "./RunnableLike.lift";

const RunnableLike__catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ (() => {
    const createCatchErrorObserver = (<T>() =>
      createInstanceFactory(
        SinkLike__catchErrorMixin<RunnableLike, SinkLike<T>, T>(),
      ))();

    return (errorHandler =>
      pipe(
        createCatchErrorObserver,
        partial(errorHandler),
        RunnableLike__lift,
      )) as CatchError<RunnableLike>["catchError"];
  })();

export default RunnableLike__catchError;
