import { createInstanceFactory } from "../../../__internal__/mixins";
import { CatchError } from "../../../containers";
import { partial, pipe } from "../../../functions";
import { RunnableLike, SinkLike } from "../../../rx";
import Sink_catchErrorMixin from "../Sink/Sink.catchErrorMixin";
import Runnable_lift from "./Runnable.lift";

const Runnable_catchError: CatchError<RunnableLike>["catchError"] =
  /*@__PURE__*/ (() => {
    const createCatchErrorObserver = (<T>() =>
      createInstanceFactory(
        Sink_catchErrorMixin<RunnableLike, SinkLike<T>, T>(),
      ))();

    return (errorHandler =>
      pipe(
        createCatchErrorObserver,
        partial(errorHandler),
        Runnable_lift,
      )) as CatchError<RunnableLike>["catchError"];
  })();

export default Runnable_catchError;
