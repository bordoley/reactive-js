import {
  Mixin1,
  Mutable,
  mix,
  props,
  proto,
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
  Pick<SerialDisposableLike<TDisposable>, typeof SerialDisposableLike_current>,
  TDisposable,
  DisposableLike,
  Pick<SerialDisposableLike<TDisposable>, typeof SerialDisposableLike_current>
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");

  type TProperties = {
    [SerialDisposableMixin_current]: TDisposable;
  };

  return returns(
    mix<
      Pick<
        SerialDisposableLike<TDisposable>,
        typeof SerialDisposableLike_current
      >,
      TProperties,
      Pick<
        SerialDisposableLike<TDisposable>,
        typeof SerialDisposableLike_current
      >,
      DisposableLike,
      TDisposable
    >(
      function SerialDisposableMixin(
        this: Pick<
          SerialDisposableLike<TDisposable>,
          typeof SerialDisposableLike_current
        > &
          DisposableLike &
          Mutable<TProperties>,
        defaultValue: TDisposable,
      ): Pick<
        SerialDisposableLike<TDisposable>,
        typeof SerialDisposableLike_current
      > {
        this[SerialDisposableMixin_current] = defaultValue;
        pipe(this, Disposable.add(defaultValue));

        return this;
      },
      props<TProperties>({
        [SerialDisposableMixin_current]: none,
      }),
      proto({
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
      }),
    ),
  );
})();

export default SerialDisposableMixin;
