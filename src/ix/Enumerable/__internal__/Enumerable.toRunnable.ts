import { Factory, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  InteractiveContainerLike_interact,
} from "../../../ix";
import { RunnableLike, SinkLike, ToRunnable } from "../../../rx";
import Runnable_create from "../../../rx/Runnable/__internal__/Runnable.create";
import Sink_notifySink from "../../../rx/Sink/__internal__/Sink.notifySink";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Enumerator_forEach from "../../Enumerator/__internal__/Enumerator.forEach";

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
