import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mutable,
  createInstanceFactory,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { Buffer } from "../../../containers.js";
import StatefulContainer_buffer from "../../../containers/StatefulContainer/__internal__/StatefulContainer.buffer.js";
import { TInteractive } from "../../../containers/__internal__/containers.internal.js";
import { getLength, pipe } from "../../../functions.js";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix.js";
import Disposable_add from "../../../util/Disposable/__internal__/Disposable.add.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Enumerator_getCurrent from "../../Enumerator/__internal__/Enumerator.getCurrent.js";
import Enumerator_move from "../../Enumerator/__internal__/Enumerator.move.js";
import MutableEnumerator_mixin from "../../Enumerator/__internal__/MutableEnumerator.mixin.js";
import { MutableEnumeratorLike } from "../../__internal__/ix.internal.js";
import Enumerable_liftT from "./Enumerable.liftT.js";

const Enumerable_buffer: Buffer<EnumerableLike>["buffer"] = /*@__PURE__*/ (<
  T,
>() => {
  const typedMutableEnumeratorMixin = MutableEnumerator_mixin<readonly T[]>();

  const BufferEnumerator_maxBufferSize = Symbol(
    "BufferEnumerator_maxBufferSize",
  );

  type TProperties = {
    readonly [BufferEnumerator_maxBufferSize]: number;
  };

  return pipe(
    createInstanceFactory(
      mix(
        include(
          Disposable_mixin,
          typedMutableEnumeratorMixin,
          delegatingMixin(),
        ),
        function BufferEnumerator(
          instance: Pick<EnumeratorLike<readonly T[]>, typeof SourceLike_move> &
            Mutable<TProperties>,
          delegate: EnumeratorLike<T>,
          maxBufferSize: number,
        ): EnumeratorLike<readonly T[]> {
          init(Disposable_mixin, instance);
          init(typedMutableEnumeratorMixin, instance);
          init(delegatingMixin(), instance, delegate);

          instance[BufferEnumerator_maxBufferSize] = maxBufferSize;

          pipe(instance, Disposable_add(delegate));

          return instance;
        },
        props<TProperties>({
          [BufferEnumerator_maxBufferSize]: 0,
        }),
        {
          [SourceLike_move](
            this: TProperties &
              MutableEnumeratorLike<readonly T[]> &
              DelegatingLike<EnumeratorLike<T>>,
          ) {
            const buffer: T[] = [];

            const {
              [DelegatingLike_delegate]: delegate,
              [BufferEnumerator_maxBufferSize]: maxBufferSize,
            } = this;

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
