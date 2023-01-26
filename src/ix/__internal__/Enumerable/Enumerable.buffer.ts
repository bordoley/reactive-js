import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import StatefulContainer_buffer from "../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable_add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Enumerator_getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator_move from "../Enumerator/Enumerator.move";
import MutableEnumerator_mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable_liftT from "./Enumerable.liftT";

const Enumerable_buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<readonly T[]>();

  type TProperties = {
    readonly delegate: EnumeratorLike<T>;
    readonly maxBufferSize: number;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable_mixin, typedMutableEnumeratorMixin),
        function BufferEnumerator(
          instance: Pick<EnumeratorLike<readonly T[]>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          maxBufferSize: number,
        ): EnumeratorLike<readonly T[]> {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.maxBufferSize = maxBufferSize;

          pipe(instance, Disposable_add(delegate));

          return instance;
        },
        props<TProperties>({
          delegate: none,
          maxBufferSize: 0,
        }),
        {
          [SourceLike_move](
            this: TProperties & MutableEnumeratorLike<readonly T[]>,
          ) {
            const buffer: T[] = [];

            const { delegate, maxBufferSize } = this;

            while (
              getLength(buffer) < maxBufferSize &&
              Enumerator_move(delegate)
            ) {
              buffer.push(Enumerator_getCurrent(delegate));
            }

            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
              this[EnumeratorLike_current] = buffer;
            } else if (bufferLength === 0) {
              pipe(this, Disposable_dispose());
            }
          },
        },
      ),
    ),
    StatefulContainer_buffer<EnumerableLike, T, TInteractive>(Enumerable_liftT),
  );
})();

export default Enumerable_buffer;
