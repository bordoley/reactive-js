import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { SinkLike, SinkLike_notify } from "../../../rx";

import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";

const Sink_create: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function CreateSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
      ): SinkLike<T> {
        init(Disposable_mixin, instance);

        return instance;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  ))();

export default Sink_create;
