import Container_repeat from "../../../containers/__internal__/Container/Container.repeat";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import DelegateSink_create from "../DelegatingSink/DelegatingSink.create";
import Sink_sourceFrom from "../Sink/Sink.sourceFrom";
import Runnable_create from "./Runnable.create";

const Runnable_repeat = /*@__PURE__*/ (<T>() => {
  return Container_repeat<RunnableLike, T>((delegate, predicate) =>
    Runnable_create(sink => {
      let count = 0;
      do {
        pipe(
          DelegateSink_create(sink),
          Disposable_addTo(sink),
          Sink_sourceFrom(delegate),
          Disposable_dispose(),
        );
        count++;
      } while (!Disposable_isDisposed(sink) && predicate(count));
    }),
  );
})();

export default Runnable_repeat;
