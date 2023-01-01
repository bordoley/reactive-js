import { Factory, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { RunnableLike, SinkLike, ToRunnable } from "../../../rx";
import { notifySink } from "../../../rx/SinkLike";
import RunnableLike__create from "../../../rx/__internal__/RunnableLike/RunnableLike.create";
import { add, dispose } from "../../../util/DisposableLike";
import EnumeratorLike__forEach from "../EnumeratorLike/EnumeratorLike.forEach";

const EnumerableLike__toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ (() => {
    const enumeratorToRunnable = <T>(
      f: Factory<EnumeratorLike<T>>,
    ): RunnableLike<T> => {
      const run = (sink: SinkLike<T>) => {
        pipe(
          f(),
          add(sink),
          EnumeratorLike__forEach(notifySink(sink)),
          dispose(),
        );
      };
      return RunnableLike__create(run);
    };

    return <T>() =>
      (enumerable: EnumerableLike<T>): RunnableLike<T> =>
        enumeratorToRunnable(() =>
          enumerable[InteractiveContainerLike_interact](),
        );
  })();

export default EnumerableLike__toRunnable;
