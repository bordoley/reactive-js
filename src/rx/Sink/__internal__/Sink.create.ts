import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { ObserverLike_notify, SinkLike } from "../../../rx.js";

import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";

const Sink_create: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function CreateSink(
        instance: Pick<SinkLike<T>, typeof ObserverLike_notify>,
      ): SinkLike<T> {
        init(Disposable_mixin, instance);

        return instance;
      },
      {},
      {
        [ObserverLike_notify](_: T) {},
      },
    ),
  ))();

export default Sink_create;
