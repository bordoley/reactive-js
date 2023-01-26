import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins";
import { DisposableLike } from "../../../util";
import Disposable$mixin from "../Disposable/Disposable.mixin";
import { DisposableRefLike } from "../util.internal";
import DisposableRef$mixin from "./DisposableRef.mixin";

const DisposableRef$create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => DisposableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedDisposableRefMixin = DisposableRef$mixin<TDisposable>();

  return createInstanceFactory(
    mix(
      include(Disposable$mixin, typedDisposableRefMixin),
      function DisposableRef(
        instance: unknown,
        initialValue: TDisposable,
      ): DisposableRefLike<TDisposable> {
        init(Disposable$mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();

export default DisposableRef$create;
