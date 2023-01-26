import { Factory, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { RunnableLike, SinkLike, ToRunnable } from "../../../rx";
import Runnable$create from "../../../rx/__internal__/Runnable/Runnable.create";
import Sink$notifySink from "../../../rx/__internal__/Sink/Sink.notifySink";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Enumerator$forEach from "../Enumerator/Enumerator.forEach";

const Enumerable$toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ (() => {
    const enumeratorToRunnable = <T>(
      f: Factory<EnumeratorLike<T>>,
    ): RunnableLike<T> => {
      const run = (sink: SinkLike<T>) => {
        pipe(
          f(),
          Disposable$add(sink),
          Enumerator$forEach(Sink$notifySink(sink)),
          Disposable$dispose(),
        );
      };
      return Runnable$create(run);
    };

    return <T>() =>
      (enumerable: EnumerableLike<T>): RunnableLike<T> =>
        enumeratorToRunnable(() =>
          enumerable[InteractiveContainerLike_interact](),
        );
  })();

export default Enumerable$toRunnable;
