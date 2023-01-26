import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins";
import { none, pipe, returns, unsafeCast } from "../../../functions";
import { DisposableLike } from "../../../util";
import Disposable$add from "../Disposable/Disposable.add";
import Disposable$dispose from "../Disposable/Disposable.dispose";
import {
  DisposableRefLike,
  MutableRefLike,
  MutableRefLike_current,
} from "../util.internal";

const DisposableRef$mixin: <TDisposable extends DisposableLike>() => Mixin1<
  MutableRefLike<TDisposable>,
  TDisposable
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  const DisposableRef_private_current = Symbol("DisposableRef_private_current");

  type TProperties = {
    [DisposableRef_private_current]: TDisposable;
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

        instance[DisposableRef_private_current] = defaultValue;
        pipe(instance, Disposable$add(defaultValue));

        return instance;
      },
      props<TProperties>({
        [DisposableRef_private_current]: none,
      }),
      {
        get [MutableRefLike_current](): TDisposable {
          unsafeCast<TProperties>(this);
          return this[DisposableRef_private_current];
        },
        set [MutableRefLike_current](v: TDisposable) {
          unsafeCast<TProperties & DisposableLike>(this);
          const oldValue = this[DisposableRef_private_current];
          pipe(oldValue, Disposable$dispose());

          this[DisposableRef_private_current] = v;
          pipe(this, Disposable$add(v));
        },
      },
    ),
    returns,
  );
})();

export default DisposableRef$mixin;
