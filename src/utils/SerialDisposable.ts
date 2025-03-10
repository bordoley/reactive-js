import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
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
  mixInstanceFactory(
    include(DisposableMixin, SerialDisposableMixin<TDisposable>()),
    function SerialDisposable(
      this: unknown,
      initialValue: TDisposable = Disposable.disposed as TDisposable,
    ): SerialDisposableLike<TDisposable> {
      init(DisposableMixin, this);
      init(SerialDisposableMixin<TDisposable>(), this, initialValue);
      return this;
    },
  ))();
