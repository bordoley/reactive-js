import { isSome, pipe, raiseError } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableLike_error } from "../../../util";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Sink_create from "../Sink/Sink.create";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";

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
