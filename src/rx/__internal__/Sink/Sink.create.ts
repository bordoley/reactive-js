import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SinkLike, SinkLike_notify } from "../../../rx";

import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";

const Sink$create: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Disposable$mixin),
      function CreateSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
      ): SinkLike<T> {
        init(Disposable$mixin, instance);

        return instance;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  ))();

export default Sink$create;
