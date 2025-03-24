import {
  Mixin1,
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

type TPrototype<TDisposable extends DisposableLike> = Pick<
  SerialDisposableLike<TDisposable>,
  typeof SerialDisposableLike_current
>;
type TReturn<TDisposable extends DisposableLike> = TPrototype<TDisposable>;

const SerialDisposableMixin: <TDisposable extends DisposableLike>() => Mixin1<
  TReturn<TDisposable>,
  TDisposable,
  TPrototype<TDisposable>,
  DisposableLike
> = /*@__PURE__*/ (<TDisposable extends DisposableLike>() => {
  const SerialDisposableMixin_current = Symbol("SerialDisposableMixin_current");

  type TProperties = {
    [SerialDisposableMixin_current]: TDisposable;
  };

  return returns(
    mix<
      TReturn<TDisposable>,
      TProperties,
      TPrototype<TDisposable>,
      DisposableLike,
      TDisposable
    >(
      function SerialDisposableMixin(this, defaultValue) {
        this[SerialDisposableMixin_current] = defaultValue;
        pipe(this, Disposable.add(defaultValue));

        return this;
      },
      props<TProperties>({
        [SerialDisposableMixin_current]: none,
      }),
      proto<TPrototype<TDisposable>>({
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
