import { isSome, pipe, raise } from "../../../functions";
import { RunnableLike } from "../../../rx";
import { DisposableLike_error } from "../../../util";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import SinkLike__create from "../SinkLike/SinkLike.create";
import SinkLike__sourceFrom from "../SinkLike/SinkLike.sourceFrom";

const RunnableLike__run =
  <T>() =>
  (runnable: RunnableLike<T>): void =>
    pipe(
      SinkLike__create(),
      SinkLike__sourceFrom(runnable),
      DisposableLike__dispose(),
      ({ [DisposableLike_error]: error }) => {
        if (isSome(error)) {
          raise(error);
        }
      },
    );

export default RunnableLike__run;
