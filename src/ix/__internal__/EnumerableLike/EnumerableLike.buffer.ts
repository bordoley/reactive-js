import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { Buffer } from "../../../containers";
import StatefulContainerLike__buffer from "../../../containers/__internal__/StatefulContainerLike/StatefulContainerLike.buffer";
import { TInteractive } from "../../../containers/__internal__/containers.internal";
import { getLength, none, pipe } from "../../../functions";
import {
  EnumerableLike,
  EnumeratorLike,
  EnumeratorLike_current,
  SourceLike_move,
} from "../../../ix";
import DisposableLike__add from "../../../util/__internal__/DisposableLike/DisposableLike.add";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import EnumeratorLike__getCurrent from "../EnumeratorLike/EnumeratorLike.getCurrent";
import EnumeratorLike__move from "../EnumeratorLike/EnumeratorLike.move";
import MutableEnumeratorLike__mixin from "../MutableEnumeratorLike/MutableEnumeratorLike.mixin";
import { MutableEnumeratorLike } from "../ix.internal";
import EnumerableLike__liftT from "./EnumerableLike.liftT";

const EnumerableLike__buffer: Buffer<EnumerableLike>["buffer"] =
  /*@__PURE__*/ (<T>() => {
    const typedMutableEnumeratorMixin =
      MutableEnumeratorLike__mixin<readonly T[]>();

    type TProperties = {
      readonly delegate: EnumeratorLike<T>;
      readonly maxBufferSize: number;
    };

    return pipe(
      createInstanceFactory(
        mix(
          include(DisposableLike__mixin, typedMutableEnumeratorMixin),
          function BufferEnumerator(
            instance: Pick<
              EnumeratorLike<readonly T[]>,
              typeof SourceLike_move
            > &
              Mutable<TProperties>,
            delegate: EnumeratorLike<T>,
            maxBufferSize: number,
          ): EnumeratorLike<readonly T[]> {
            init(DisposableLike__mixin, instance);
            init(typedMutableEnumeratorMixin, instance);

            instance.delegate = delegate;
            instance.maxBufferSize = maxBufferSize;

            pipe(instance, DisposableLike__add(delegate));

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
                EnumeratorLike__move(delegate)
              ) {
                buffer.push(EnumeratorLike__getCurrent(delegate));
              }

              const bufferLength = getLength(buffer);
              if (bufferLength > 0) {
                this[EnumeratorLike_current] = buffer;
              } else if (bufferLength === 0) {
                pipe(this, DisposableLike__dispose());
              }
            },
          },
        ),
      ),
      StatefulContainerLike__buffer<EnumerableLike, T, TInteractive>(
        EnumerableLike__liftT,
      ),
    );
  })();

export default EnumerableLike__buffer;
