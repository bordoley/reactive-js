import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getLength, isEmpty, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/__internal__/Disposable/Disposable.addTo";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../ReactiveContainer/ReactiveContainer.sinkInto";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_bufferMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromArray: (v: readonly T[][]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromArray: (v: readonly T[][]) => C,
) => {
  const BufferSinkMixin_maxBufferSize = Symbol("BufferSinkMixin_maxBufferSize");
  const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");

  type TProperties = {
    readonly [DelegatingSinkLike_delegate]: TSink;
    readonly [BufferSinkMixin_maxBufferSize]: number;
    [BufferSinkMixin_buffer]: T[];
  };

  return mix(
    include(Disposable_mixin),
    function BufferSinkMixin(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      maxBufferSize: number,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);

      instance[DelegatingSinkLike_delegate] = delegate;
      instance[BufferSinkMixin_maxBufferSize] = maxBufferSize;
      instance[BufferSinkMixin_buffer] = [];

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          const { [BufferSinkMixin_buffer]: buffer } = instance;
          instance[BufferSinkMixin_buffer] = [];

          if (isEmpty(buffer)) {
            pipe(instance[DelegatingSinkLike_delegate], Disposable_dispose());
          } else {
            pipe(
              [buffer],
              fromArray,
              ReactiveContainer_sinkInto<C, TSink, readonly T[]>(
                instance[DelegatingSinkLike_delegate],
              ),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [DelegatingSinkLike_delegate]: none,
      [BufferSinkMixin_maxBufferSize]: 0,
      [BufferSinkMixin_buffer]: none,
    }),
    {
      [SinkLike_notify](this: TProperties, next: T) {
        const {
          [BufferSinkMixin_buffer]: buffer,
          [BufferSinkMixin_maxBufferSize]: maxBufferSize,
        } = this;

        buffer.push(next);

        if (getLength(buffer) === maxBufferSize) {
          const buffer = this[BufferSinkMixin_buffer];
          this[BufferSinkMixin_buffer] = [];

          this[DelegatingSinkLike_delegate][SinkLike_notify](buffer);
        }
      },
    },
  );
};

export default Sink_bufferMixin;
