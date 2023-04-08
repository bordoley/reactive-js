import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import { __SerialDisposableMixin_current } from "../../../__internal__/symbols.js";
import {
  SerialDisposableLike,
  SerialDisposableLike_current,
} from "../../../__internal__/util.internal.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DisposableLike, DisposableLike_dispose } from "../../../util.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";

const SerialDisposable_mixin: <TDisposable extends DisposableLike>() => Mixin1<
  SerialDisposableLike<TDisposable>,
  TDisposable
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  type TProperties = {
    [__SerialDisposableMixin_current]: TDisposable;
  };

  return pipe(
    mix(
      function SerialDisposable(
        instance: Pick<
          SerialDisposableLike<TDisposable>,
          typeof SerialDisposableLike_current
        > &
          Mutable<TProperties>,
        defaultValue: TDisposable,
      ): SerialDisposableLike<TDisposable> {
        unsafeCast<DisposableLike>(instance);

        instance[__SerialDisposableMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));

        return instance;
      },
      props<TProperties>({
        [__SerialDisposableMixin_current]: none,
      }),
      {
        get [SerialDisposableLike_current](): TDisposable {
          unsafeCast<TProperties>(this);
          return this[__SerialDisposableMixin_current];
        },
        set [SerialDisposableLike_current](v: TDisposable) {
          unsafeCast<TProperties & DisposableLike>(this);
          const oldValue = this[__SerialDisposableMixin_current];
          oldValue[DisposableLike_dispose]();

          this[__SerialDisposableMixin_current] = v;
          pipe(this, Disposable_add(v));
        },
      },
    ),
    returns,
  );
})();

export default SerialDisposable_mixin;
