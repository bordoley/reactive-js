import { createInstanceFactory } from "../../../__internal__/mixins";
import { CatchError } from "../../../containers";
import { partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink$catchErrorMixin from "../Sink/Sink.catchErrorMixin";
import Runnable$lift from "./Runnable.lift";

const Runnable$catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ (() => {
    const createCatchErrorObserver = (<T>() =>
      createInstanceFactory(
        Sink$catchErrorMixin<RunnableLike, SinkLike<T>, T>(),
      ))();

    return (errorHandler =>
      pipe(
        createCatchErrorObserver,
        partial(errorHandler),
        Runnable$lift,
      )) as CatchError<RunnableLike>["catchError"];
  })();

export default Runnable$catchError;
