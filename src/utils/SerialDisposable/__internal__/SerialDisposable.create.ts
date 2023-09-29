import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../../../__internal__/mixins.js";
import { DisposableLike, SerialDisposableLike } from "../../../utils.js";
import DisposableMixin from "../../__mixins__/DisposableMixin.js";
import SerialDisposableMixin from "../../__mixins__/SerialDisposableMixin.js";

const SerialDisposable_create: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => SerialDisposableLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() =>
  createInstanceFactory(
    mix(
      include(DisposableMixin, SerialDisposableMixin<TDisposable>()),
      function SerialDisposable(
        instance: unknown,
        initialValue: TDisposable,
      ): SerialDisposableLike<TDisposable> {
        init(DisposableMixin, instance);
        init(SerialDisposableMixin<TDisposable>(), instance, initialValue);
        return instance;
      },
    ),
  ))();

export default SerialDisposable_create;
