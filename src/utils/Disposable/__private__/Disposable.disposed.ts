import {
  include,
  init,
  mixInstanceFactory,
} from "../../../__internal__/mixins.js";
import { DisposableLike, DisposableLike_dispose } from "../../../utils.js";
import type * as Disposable from "../../Disposable.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";

const Disposable_disposed: Disposable.Signature["disposed"] =
  /*@__PURE__*/ (() => {
    const disposed = mixInstanceFactory<DisposableLike, DisposableLike>(
      include(DisposableMixin),
      function DisposedDisposable(instance: DisposableLike) {
        init(DisposableMixin, instance);
        return instance;
      },
    )();
    disposed[DisposableLike_dispose]();

    return disposed;
  })();

export default Disposable_disposed;
