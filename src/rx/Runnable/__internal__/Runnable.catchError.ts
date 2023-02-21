import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { CatchError } from "../../../containers.js";
import { partial, pipe } from "../../../functions.js";
import { RunnableLike, SinkLike } from "../../../rx.js";
import Sink_catchErrorMixin from "../../Sink/__internal__/Sink.catchErrorMixin.js";
import Runnable_lift from "./Runnable.lift.js";

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
