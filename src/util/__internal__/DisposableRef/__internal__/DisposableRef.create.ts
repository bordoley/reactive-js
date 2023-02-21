import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../../__internal__/mixins.js";
import { DisposableLike } from "../../../../util.js";
import Disposable_mixin from "../../../Disposable/__internal__/Disposable.mixin.js";
import { DisposableRefLike } from "../../../__internal__/util.internal.js";
import DisposableRef_mixin from "./DisposableRef.mixin.js";

const DisposableRef_create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => DisposableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedDisposableRefMixin = DisposableRef_mixin<TDisposable>();

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedDisposableRefMixin),
      function DisposableRef(
        instance: unknown,
        initialValue: TDisposable,
      ): DisposableRefLike<TDisposable> {
        init(Disposable_mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();

export default DisposableRef_create;
