import {
  DisposableLike,
  DisposableLike_add,
  dispose,
} from "../../../util/DisposableLike";
import { Option, isNone, isSome } from "../../../util/Option";
import { ConstructorOf, Factory, pipe } from "../../../util/functions";
import { MutableRefLike, MutableRefLike_current } from "../MutableRefLike";
import { Mixin, Mixin1, Mixin2, Mixin3, addProperty } from "../mixins";

export interface SerialDisposableLike<TDisposable extends DisposableLike>
  extends DisposableLike,
    MutableRefLike<TDisposable> {}

export const SerialDisposableMixin_current = Symbol(
  "SerialDisposableMixin_current",
);

export interface SerialDisposableMixin<T extends DisposableLike>
  extends DisposableLike {
  [SerialDisposableMixin_current]: Option<T>;
}

function set<TDisposable extends DisposableLike>(
  this: SerialDisposableMixin<TDisposable>,
  newCurrent: TDisposable,
) {
  const oldCurrent = this[SerialDisposableMixin_current];

  this[SerialDisposableMixin_current] = newCurrent;
  this[DisposableLike_add](newCurrent, false);

  if (isSome(oldCurrent) && oldCurrent !== newCurrent) {
    pipe(oldCurrent, dispose());
  }
}

interface MixinSerialDisposable {
  <
    T extends SerialDisposableMixin<TDisposable>,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin<T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    T extends SerialDisposableMixin<TDisposable>,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin1<TA, T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    TB,
    T extends SerialDisposableMixin<TDisposable>,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin2<TA, TB, T, SerialDisposableLike<TDisposable>>;
  <
    TA,
    TB,
    TC,
    T extends SerialDisposableMixin<TDisposable>,
    TDisposable extends DisposableLike = DisposableLike,
  >(
    defaultValue: Factory<TDisposable>,
  ): Mixin3<TA, TB, TC, T, SerialDisposableLike<TDisposable>>;
}

export const mixinSerialDisposable: MixinSerialDisposable = <
  T extends SerialDisposableMixin<TDisposable>,
  TDisposable extends DisposableLike = DisposableLike,
>(
  defaultValue: Factory<TDisposable>,
) => {
  function get(this: SerialDisposableMixin<TDisposable>): TDisposable {
    let current = this[SerialDisposableMixin_current];
    if (isNone(current)) {
      current = defaultValue();
      this[SerialDisposableMixin_current] = current;
      this[DisposableLike_add](current, false);
    }
    return current;
  }
  return (
    Constructor: ConstructorOf<T>,
  ): ConstructorOf<T & SerialDisposableLike<TDisposable>> =>
    pipe(
      Constructor,
      addProperty<typeof MutableRefLike_current, TDisposable>(
        MutableRefLike_current,
        {
          get,
          set,
        },
      ),
    );
};
