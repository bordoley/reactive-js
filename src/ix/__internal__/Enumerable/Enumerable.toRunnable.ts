import { Factory, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { RunnableLike, SinkLike, ToRunnable } from "../../../rx";
import Runnable_create from "../../../rx/__internal__/Runnable/Runnable.create";
import Sink_notifySink from "../../../rx/__internal__/Sink/Sink.notifySink";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Enumerator_forEach from "../Enumerator/Enumerator.forEach";

const Enumerable_toRunnable: ToRunnable<EnumerableLike>["toRunnable"] =
  /*@__PURE__*/ (() => {
    const enumeratorToRunnable = <T>(
      f: Factory<EnumeratorLike<T>>,
    ): RunnableLike<T> => {
      const run = (sink: SinkLike<T>) => {
        pipe(
          f(),
          Disposable_add(sink),
          Enumerator_forEach(Sink_notifySink(sink)),
          Disposable_dispose(),
        );
      };
      return Runnable_create(run);
    };

    return <T>() =>
      (enumerable: EnumerableLike<T>): RunnableLike<T> =>
        enumeratorToRunnable(() =>
          enumerable[InteractiveContainerLike_interact](),
        );
  })();

export default Enumerable_toRunnable;
