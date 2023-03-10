import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { DisposableLike } from "../../../util.js";
import { SerialDisposableLike } from "../../__internal__/util.internal.js";
import Disposable_mixin from "./Disposable.mixin.js";
import SerialDisposable_mixin from "./SerialDisposable.mixin.js";

const SerialDisposable_create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => SerialDisposableLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedSerialDisposableMixin = SerialDisposable_mixin<TDisposable>();

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, typedSerialDisposableMixin),
      function SerialDisposable(
        instance: unknown,
        initialValue: TDisposable,
      ): SerialDisposableLike<TDisposable> {
        init(Disposable_mixin, instance);
        init(typedSerialDisposableMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();

export default SerialDisposable_create;
