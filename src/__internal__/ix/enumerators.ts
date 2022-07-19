import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  hasCurrent,
} from "../../ix/EnumeratorLike";
import { InteractiveSourceLike_move } from "../../ix/InteractiveSourceLike";
import { DisposableLike, isDisposed } from "../../util/DisposableLike";
import { Option } from "../../util/Option";
import { ConstructorOf, pipe, raise } from "../../util/functions";
import {
  Mixin,
  Mixin1,
  Mixin2,
  Mixin3,
  addGetter,
  addProperty,
} from "../util/mixins";

export const EnumeratorMixin_current = Symbol("EnumeratorMixin_current");

export const EnumeratorMixin_hasCurrent = Symbol("EnumeratorMixin_hasCurrent");

export interface EnumeratorMixin<T> {
  [EnumeratorMixin_current]: Option<T>;
  [EnumeratorMixin_hasCurrent]: boolean;
  [InteractiveSourceLike_move](): void;
}

export interface MutableEnumeratorLike<T> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
}

interface MixinEnumerator {
  <TEnumerator extends EnumeratorMixin<T>, T = unknown>(): Mixin<
    TEnumerator,
    MutableEnumeratorLike<T>
  >;
  <TEnumerator extends EnumeratorMixin<T>, TA, T = unknown>(): Mixin1<
    TA,
    TEnumerator,
    MutableEnumeratorLike<T>
  >;
  <TEnumerator extends EnumeratorMixin<T>, TA, TB, T = unknown>(): Mixin2<
    TA,
    TB,
    TEnumerator,
    MutableEnumeratorLike<T>
  >;
  <TEnumerator extends EnumeratorMixin<T>, TA, TB, TC, T>(): Mixin3<
    TA,
    TB,
    TC,
    TEnumerator,
    MutableEnumeratorLike<T>
  >;
}

function getCurrent<T>(
  this: EnumeratorMixin<T> & {
    readonly [EnumeratorLike_hasCurrent]: boolean;
  },
): T {
  return hasCurrent(this) ? (this[EnumeratorMixin_current] as T) : raise();
}

function setCurrent<T>(this: EnumeratorMixin<T> & DisposableLike, v: T) {
  if (!isDisposed(this)) {
    this[EnumeratorMixin_current] = v;
    this[EnumeratorMixin_hasCurrent] = true;
  }
}

function getHasCurrent<T>(this: EnumeratorMixin<T> & DisposableLike) {
  return !isDisposed(this) && this[EnumeratorMixin_hasCurrent];
}

export const mixinEnumerator: MixinEnumerator =
  <TEnumerator extends EnumeratorMixin<T> & DisposableLike, T = unknown>() =>
  (
    Constructor: ConstructorOf<TEnumerator>,
  ): ConstructorOf<TEnumerator & MutableEnumeratorLike<T>> =>
    pipe(
      Constructor,
      addGetter<typeof EnumeratorLike_hasCurrent, boolean>(
        EnumeratorLike_hasCurrent,
        getHasCurrent,
      ),
      addProperty<typeof EnumeratorLike_current, T>(EnumeratorLike_current, {
        get: getCurrent,
        set: setCurrent,
      }),
    );
