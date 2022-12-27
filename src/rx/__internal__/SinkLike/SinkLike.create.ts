import {
  createInstanceFactory,
  include,
  init,
  mixin,
} from "../../../__internal__/mixins";
import { SinkLike, SinkLike_notify } from "../../../rx";

import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";

const create: <T>() => SinkLike<T> = /*@__PURE__*/ (<T>() =>
  createInstanceFactory(
    mixin(
      include(DisposableLike__mixin),
      function CreateSink(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify>,
      ): SinkLike<T> {
        init(DisposableLike__mixin, instance);

        return instance;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  ))();

export default create;
