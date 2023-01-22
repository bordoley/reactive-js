import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DisposableLike } from "../../../util";
import DisposableLike__mixin from "../DisposableLike/DisposableLike.mixin";
import { DisposableRefLike } from "../util.internal";
import DisposableRefLike__mixin from "./DisposableRefLike.mixin";

const DisposableRefLike__create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => DisposableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedDisposableRefMixin = DisposableRefLike__mixin<TDisposable>();

  return createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedDisposableRefMixin),
      function DisposableRef(
        instance: unknown,
        initialValue: TDisposable,
      ): DisposableRefLike<TDisposable> {
        init(DisposableLike__mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();

export default DisposableRefLike__create;
