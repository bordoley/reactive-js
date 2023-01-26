import Container$repeat from "../../../containers/__internal__/Container/Container.repeat";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Disposable$addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import DelegateSink$create from "../DelegatingSink/DelegatingSink.create";
import Sink$sourceFrom from "../Sink/Sink.sourceFrom";
import Runnable$create from "./Runnable.create";

const Runnable$repeat = /*@__PURE__*/ (<T>() => {
  return Container$repeat<RunnableLike, T>((delegate, predicate) =>
    Runnable$create(sink => {
      let count = 0;
      do {
        pipe(
          DelegateSink$create(sink),
          Disposable$addTo(sink),
          Sink$sourceFrom(delegate),
          Disposable$dispose(),
        );
        count++;
      } while (!Disposable$isDisposed(sink) && predicate(count));
    }),
  );
})();

export default Runnable$repeat;
