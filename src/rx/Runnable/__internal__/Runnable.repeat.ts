import Container_repeat from "../../../containers/Container/__internal__/Container.repeat.js";
import { pipe } from "../../../functions.js";
import { RunnableLike } from "../../../rx.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Sink_createWithDelegate from "../../Sink/__internal__/Sink.createWithDelegate.js";
import Sink_sourceFrom from "../../Sink/__internal__/Sink.sourceFrom.js";
import Runnable_create from "./Runnable.create.js";

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
