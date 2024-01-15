import {
  Mixin1,
  Mutable,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { none, pipe, returns } from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";

const SerialDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<
  SerialDisposableLike<TDisposable>,
  TDisposable,
  DisposableLike
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");

  type TProperties = {
    [SerialDisposableMixin_current]: TDisposable;
  };

  return pipe(
    mix<
      SerialDisposableLike<TDisposable>,
      TProperties,
      Pick<
        SerialDisposableLike<TDisposable>,
        typeof SerialDisposableLike_current
      >,
      DisposableLike,
      TDisposable
    >(
      function SerialDisposableMixin(
        instance: Pick<
          SerialDisposableLike<TDisposable>,
          typeof SerialDisposableLike_current
        > &
          DisposableLike &
          Mutable<TProperties>,
        defaultValue: TDisposable,
      ): SerialDisposableLike<TDisposable> {
        instance[SerialDisposableMixin_current] = defaultValue;
        pipe(instance, Disposable.add(defaultValue));

        return instance;
      },
      props<TProperties>({
        [SerialDisposableMixin_current]: none,
      }),
      {
        get [SerialDisposableLike_current](): TDisposable {
          unsafeCast<TProperties>(this);
          return this[SerialDisposableMixin_current];
        },
        set [SerialDisposableLike_current](v: TDisposable) {
          unsafeCast<TProperties & DisposableLike>(this);
          const oldValue = this[SerialDisposableMixin_current];
          oldValue[DisposableLike_dispose]();

          this[SerialDisposableMixin_current] = v;
          pipe(this, Disposable.add(v));
        },
      },
    ),
    returns,
  );
})();

export default SerialDisposableMixin;
