import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { SerialDisposableLike } from "../../../__internal__/util.internal.js";
import { DisposableLike } from "../../../util.js";
import Disposable_mixin from "./Disposable.mixin.js";
import SerialDisposable_mixin from "./SerialDisposable.mixin.js";

const SerialDisposable_create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => SerialDisposableLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() =>
  createInstanceFactory(
    mix(
      include(Disposable_mixin, SerialDisposable_mixin<TDisposable>()),
      function SerialDisposable(
        instance: unknown,
        initialValue: TDisposable,
      ): SerialDisposableLike<TDisposable> {
        init(Disposable_mixin, instance);
        init(SerialDisposable_mixin<TDisposable>(), instance, initialValue);
        return instance;
      },
    ),
  ))();

export default SerialDisposable_create;
