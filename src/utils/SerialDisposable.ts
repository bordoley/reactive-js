import {
  createInstanceFactory,
  include,
  init,
  mix,
} from "../__internal__/mixins.js";
import { DisposableLike, SerialDisposableLike } from "../utils.js";
import * as Disposable from "./Disposable.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import SerialDisposableMixin from "./__mixins__/SerialDisposableMixin.js";

interface SerialDisposableModule {
  create(): SerialDisposableLike;
  create<TDisposable extends DisposableLike>(
    initialValue: TDisposable,
  ): SerialDisposableLike<TDisposable>;
}

type Signature = SerialDisposableModule;

export const create: Signature["create"] = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() =>
  createInstanceFactory(
    mix(
      include(DisposableMixin, SerialDisposableMixin<TDisposable>()),
      function SerialDisposable(
        instance: unknown,
        initialValue: TDisposable = Disposable.disposed as TDisposable,
      ): SerialDisposableLike<TDisposable> {
        init(DisposableMixin, instance);
        init(SerialDisposableMixin<TDisposable>(), instance, initialValue);
        return instance;
      },
    ),
  ))();
