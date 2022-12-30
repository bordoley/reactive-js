import { none, pipe, returns, unsafeCast } from "../../functions";
import { DisposableLike } from "../../util";
import DisposableLike__add from "../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__dispose from "../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../util/__internal__/DisposableLike/DisposableLike.mixin";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../mixins";
import { MutableRefLike, MutableRefLike_current } from "./MutableRefLike";

export interface DisposableRefLike<
  TDisposable extends DisposableLike = DisposableLike,
> extends DisposableLike,
    MutableRefLike<TDisposable> {}

export const disposableRefMixin: <
  TDisposable extends DisposableLike,
>() => Mixin1<MutableRefLike<TDisposable>, TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
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
        pipe(instance, DisposableLike__add(defaultValue));

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
          pipe(oldValue, DisposableLike__dispose());

          this[DisposableRef_private_current] = v;
          pipe(this, DisposableLike__add(v));
        },
      },
    ),
    returns,
  );
})();

export const createDisposableRef: <TDisposable extends DisposableLike>(
  initialValue: TDisposable,
) => DisposableRefLike<TDisposable> = /*@__PURE__*/ (<
  TDisposable extends DisposableLike,
>() => {
  const typedDisposableRefMixin = disposableRefMixin<TDisposable>();

  return createInstanceFactory(
    mix(
      include(DisposableLike__mixin, typedDisposableRefMixin),
      function DisposableRef(
        instance: unknown,
        initialValue: TDisposable,
      ): DisposableRefLike<TDisposable> {
        init(DisposableLike__mixin, instance);
        init(typedDisposableRefMixin, instance, initialValue);
        return instance;
      },
    ),
  );
})();
