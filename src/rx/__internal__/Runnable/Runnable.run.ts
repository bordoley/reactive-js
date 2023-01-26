import { isSome, pipe, raise } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableLike_error } from "../../../util";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Sink$create from "../Sink/Sink.create";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";

const Runnable$run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      Sink$create(),
      Sink$sourceFrom(runnable),
      Disposable$dispose(),
      ({ [DisposableLike_error]: error }) => {
        if (isSome(error)) {
          raise(error);
        }
      },
    );

export default Runnable$run;
