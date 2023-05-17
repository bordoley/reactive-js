import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import type * as Enumerator from "../../Enumerator.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  BufferingLike,
  BufferingLike_buffer,
  BufferingLike_count,
  DelegatingLike,
  DelegatingLike_delegate,
} from "../../__internal__/types.js";
import { none, unsafeCast } from "../../functions.js";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_move,
} from "../../types.js";

const Enumerator_buffer: Enumerator.Signature["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const createBufferEnumerator = createInstanceFactory(
    mix(
      include(Delegating_mixin()),
      function BufferEnumerator(
        instance: BufferingLike<T> & EnumeratorLike<readonly T[]>,
        delegate: EnumeratorLike<T>,
        count: number,
      ): EnumeratorLike<readonly T[]> {
        init(Delegating_mixin(), instance, delegate);

        instance[BufferingLike_count] = count;

        return instance;
      },
      props<
        BufferingLike<T> & {
          [EnumeratorLike_hasCurrent]: boolean;
        }
      >({
        [BufferingLike_buffer]: none,
        [BufferingLike_count]: 0,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        get [EnumeratorLike_current]() {
          unsafeCast<BufferingLike<T>>(this);
          return this[BufferingLike_buffer];
        },

        [EnumeratorLike_move](
          this: BufferingLike<T> &
            Mutable<EnumeratorLike<T>> &
            DelegatingLike<EnumeratorLike<T>>,
        ): boolean {
          const delegate = this[DelegatingLike_delegate];
          const buffer: T[] = [];
          this[BufferingLike_buffer] = buffer;
          this[EnumeratorLike_hasCurrent] = false;

          while (delegate[EnumeratorLike_move]()) {
            this[EnumeratorLike_hasCurrent] = true;
            buffer.push(delegate[EnumeratorLike_current]);

            if (buffer.length >= this[BufferingLike_count]) {
              break;
            }
          }

          return this[EnumeratorLike_hasCurrent];
        },
      },
    ),
  );

  return (count: number) => (delegate: EnumeratorLike<T>) =>
    createBufferEnumerator(delegate, clampPositiveInteger(count));
})();

export default Enumerator_buffer;
