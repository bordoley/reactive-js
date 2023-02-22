import { isSome, pipe, raiseError } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import { DisposableLike_error } from "../../../util.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Sink_create from "../../Sink/__internal__/Sink.create.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";

const Runnable_run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      Sink_create(),
      Sink_sourceFrom(runnable),
      Disposable_dispose(),
      ({ [DisposableLike_error]: error }) => {
        if (isSome(error)) {
          raiseError(error);
        }
      },
    );

export default Runnable_run;
