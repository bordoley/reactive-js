import { __DEV__ } from "../../__internal__/constants.js";
import { Mixin, mix, props, unsafeCast } from "../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../collections.js";
import { none, pipe, raiseWithDebugMessage, returns } from "../../functions.js";

export const MutableEnumeratorLike_reset = Symbol(
  "MutableEnumeratorLike_reset",
);

export interface MutableEnumeratorLike<T = unknown> extends EnumeratorLike<T> {
  [EnumeratorLike_current]: T;
  [EnumeratorLike_isCompleted]: boolean;
  [MutableEnumeratorLike_reset](): boolean;
}

type TEnumeratorMixinReturn<T> = Omit<
  MutableEnumeratorLike<T>,
  typeof EnumeratorLike_move
>;

const MutableEnumeratorMixin_current = Symbol("MutableEnumeratorMixin_current");

const MutableEnumeratorMixin: <T>() => Mixin<TEnumeratorMixinReturn<T>> =
  /*@__PURE__*/ (<T>() => {
    type TProperties = {
      [MutableEnumeratorMixin_current]: T;
      [EnumeratorLike_hasCurrent]: boolean;
      [EnumeratorLike_isCompleted]: boolean;
    };

    return pipe(
      mix(
        function MutableEnumeratorMixin(
          instance: Pick<
            MutableEnumeratorLike<T>,
            | typeof EnumeratorLike_current
            | typeof EnumeratorLike_hasCurrent
            | typeof MutableEnumeratorLike_reset
          > &
            TProperties,
        ): TEnumeratorMixinReturn<T> {
          return instance;
        },
        props<TProperties>({
          [MutableEnumeratorMixin_current]: none,
          [EnumeratorLike_hasCurrent]: false,
          [EnumeratorLike_isCompleted]: false,
        }),
        {
          get [EnumeratorLike_current](): T {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);
            return this[EnumeratorLike_hasCurrent]
              ? this[MutableEnumeratorMixin_current]
              : raiseWithDebugMessage("Enumerator does not have current value");
          },
          set [EnumeratorLike_current](v: T) {
            unsafeCast<TProperties & EnumeratorLike<T>>(this);

            if (__DEV__ && this[EnumeratorLike_isCompleted]) {
              raiseWithDebugMessage("enumerator has already been completed");
            }

            this[MutableEnumeratorMixin_current] = v;
            this[EnumeratorLike_hasCurrent] = true;
          },
          [MutableEnumeratorLike_reset](this: TProperties): boolean {
            this[MutableEnumeratorMixin_current] = none as T;
            this[EnumeratorLike_hasCurrent] = false;

            return this[EnumeratorLike_isCompleted];
          },
        },
      ),
      returns,
    );
  })();

export default MutableEnumeratorMixin;
