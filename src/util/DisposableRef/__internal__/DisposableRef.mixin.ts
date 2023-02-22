import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast } from "../../../functions.js";
import { DisposableLike } from "../../../util.js";
import Disposable_add from "../../Disposable/__internal__/Disposable.add.js";
import Disposable_dispose from "../../Disposable/__internal__/Disposable.dispose.js";
import {
  DisposableRefLike,
  MutableRefLike,
  MutableRefLike_current,
} from "../../__internal__/util.internal.js";

const DisposableRef_mixin: <TDisposable extends DisposableLike>() => Mixin1<
  MutableRefLike<TDisposable>,
  TDisposable
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  const DisposableRefMixin_current = Symbol("DisposableRefMixin_current");

  type TProperties = {
    [DisposableRefMixin_current]: TDisposable;
  };

  return pipe(
    mix(
      function DisposableRef(
        instance: Pick<
          DisposableRefLike<TDisposable>,
          typeof MutableRefLike_current
        > &
          Mutable<TProperties>,
        defaultValue: TDisposable,
      ): MutableRefLike<TDisposable> {
        unsafeCast<DisposableLike>(instance);

        instance[DisposableRefMixin_current] = defaultValue;
        pipe(instance, Disposable_add(defaultValue));

        return instance;
      },
      props<TProperties>({
        [DisposableRefMixin_current]: none,
      }),
      {
        get [MutableRefLike_current](): TDisposable {
          unsafeCast<TProperties>(this);
          return this[DisposableRefMixin_current];
        },
        set [MutableRefLike_current](v: TDisposable) {
          unsafeCast<TProperties & DisposableLike>(this);
          const oldValue = this[DisposableRefMixin_current];
          pipe(oldValue, Disposable_dispose());

          this[DisposableRefMixin_current] = v;
          pipe(this, Disposable_add(v));
        },
      },
    ),
    returns,
  );
})();

export default DisposableRef_mixin;
