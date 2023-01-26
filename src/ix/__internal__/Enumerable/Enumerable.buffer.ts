import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import StatefulContainer$buffer from "../../../containers/__internal__/StatefulContainer/StatefulContainer.buffer";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import Disposable$add from "../../../util/__internal__/Disposable/Disposable.add";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Enumerator$getCurrent from "../Enumerator/Enumerator.getCurrent";
import Enumerator$move from "../Enumerator/Enumerator.move";
import MutableEnumerator$mixin from "../MutableEnumerator/MutableEnumerator.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import Enumerable$liftT from "./Enumerable.liftT";

const Enumerable$buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator$mixin<readonly T[]>();

  type TProperties = {
    readonly delegate: EnumeratorLike<T>;
    readonly maxBufferSize: number;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(Disposable$mixin, typedMutableEnumeratorMixin),
        function BufferEnumerator(
          instance: Pick<EnumeratorLike<readonly T[]>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          maxBufferSize: number,
        ): EnumeratorLike<readonly T[]> {
          init(Disposable$mixin, instance);
          init(typedMutableEnumeratorMixin, instance);

          instance.delegate = delegate;
          instance.maxBufferSize = maxBufferSize;

          pipe(instance, Disposable$add(delegate));

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
              Enumerator$move(delegate)
            ) {
              buffer.push(Enumerator$getCurrent(delegate));
            }

            const bufferLength = getLength(buffer);
            if (bufferLength > 0) {
              this[EnumeratorLike_current] = buffer;
            } else if (bufferLength === 0) {
              pipe(this, Disposable$dispose());
            }
          },
        },
      ),
    ),
    StatefulContainer$buffer<EnumerableLike, T, TInteractive>(Enumerable$liftT),
  );
})();

export default Enumerable$buffer;
