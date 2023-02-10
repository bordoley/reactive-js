import Container_repeat from "../../../containers/Container/__internal__/Container.repeat";
import { pipe } from "../../../functions";
import { RunnableLike } from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Sink_createWithDelegate from "../../Sink/__internal__/Sink.createWithDelegate";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom";
import Runnable_create from "./Runnable.create";

const Runnable_repeat = /*@__PURE__*/ (<T>() => {
  return Container_repeat<RunnableLike, T>((delegate, predicate) =>
    Runnable_create(sink => {
      let count = 0;
      do {
        pipe(
          sink,
          Sink_createWithDelegate,
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
