import { Factory, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { RunnableLike, SinkLike, ToRunnable } from "../../../rx";
import RunnableLike__create from "../../../rx/__internal__/RunnableLike/RunnableLike.create";
import SinkLike__notifySink from "../../../rx/__internal__/SinkLike/SinkLike.notifySink";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import EnumeratorLike__forEach from "../EnumeratorLike/EnumeratorLike.forEach";

const EnumerableLike__toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ (() => {
    const enumeratorToRunnable = <T>(
      f: Factory<EnumeratorLike<T>>,
    ): RunnableLike<T> => {
      const run = (sink: SinkLike<T>) => {
        pipe(
          f(),
          DisposableLike__add(sink),
          EnumeratorLike__forEach(SinkLike__notifySink(sink)),
          DisposableLike__dispose(),
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
