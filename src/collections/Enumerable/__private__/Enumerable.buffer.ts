import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import {
  Mutable,
  include,
  init,
  mixInstanceFactory,
  props,
  unsafeCast,
} from "../../../__internal__/mixins.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_isCompleted,
  EnumeratorLike_move,
} from "../../../collections.js";
import { Optional, none, partial, pipe } from "../../../functions.js";

import type * as Enumerable from "../../Enumerable.js";
import DelegatingEnumeratorMixin, {
  DelegatingEnumeratorMixinLike,
  DelegatingEnumeratorMixinLike_delegate,
} from "../../__mixins__/DelegatingEnumeratorMixin.js";
import Enumerable_lift from "./Enumerable.lift.js";

const Enumerable_buffer: Enumerable.Signature["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const BufferEnumerator_buffer = Symbol("BufferEnumerator_buffer");
  const BufferEnumerator_count = Symbol("BufferEnumerator_count");

  interface TProperties<T> {
    [BufferEnumerator_buffer]: T[];
    [BufferEnumerator_count]: number;
    [EnumeratorLike_hasCurrent]: boolean;
    [EnumeratorLike_isCompleted]: boolean;
  }

  const createBufferEnumerator = mixInstanceFactory(
    include(DelegatingEnumeratorMixin<T>()),
    function BufferEnumerator(
      instance: TProperties<T> & EnumeratorLike<readonly T[]>,
      delegate: EnumeratorLike<T>,
      count: Optional<number>,
    ): EnumeratorLike<readonly T[]> {
      init(DelegatingEnumeratorMixin<T>(), instance, delegate);

      instance[BufferEnumerator_count] = clampPositiveNonZeroInteger(
        count ?? MAX_SAFE_INTEGER,
      );

      return instance;
    },
    props<
      TProperties<T> & {
        [EnumeratorLike_hasCurrent]: boolean;
        [EnumeratorLike_isCompleted]: boolean;
      }
    >({
      [BufferEnumerator_buffer]: none,
      [BufferEnumerator_count]: 0,
      [EnumeratorLike_hasCurrent]: false,
      [EnumeratorLike_isCompleted]: false,
    }),
    {
      get [EnumeratorLike_current]() {
        unsafeCast<TProperties<T>>(this);
        return this[BufferEnumerator_buffer];
      },

      [EnumeratorLike_move](
        this: TProperties<T> &
          Mutable<EnumeratorLike<T>> &
          DelegatingEnumeratorMixinLike<T>,
      ): boolean {
        if (this[EnumeratorLike_isCompleted]) {
          return false;
        }

        const delegate = this[DelegatingEnumeratorMixinLike_delegate];
        const buffer: T[] = [];
        this[BufferEnumerator_buffer] = buffer;
        this[EnumeratorLike_hasCurrent] = false;

        while (delegate[EnumeratorLike_move]()) {
          this[EnumeratorLike_hasCurrent] = true;
          buffer.push(delegate[EnumeratorLike_current]);

          if (buffer.length >= this[BufferEnumerator_count]) {
            break;
          }
        }

        this[EnumeratorLike_isCompleted] = !this[EnumeratorLike_hasCurrent];

        return this[EnumeratorLike_hasCurrent];
      },
    },
  );

  return (options?: { count?: number }) =>
    pipe(createBufferEnumerator, partial(options?.count), Enumerable_lift);
})();

export default Enumerable_buffer;
