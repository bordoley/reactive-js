import {
  DelegatingLike,
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  delegatingMixin,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getLength, isEmpty, none, pipe } from "../../../functions";
import { ReactiveContainerLike, SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import ReactiveContainer_sinkInto from "../../ReactiveContainer/__internal__/ReactiveContainer.sinkInto";

const Sink_bufferMixin: <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromReadonlyArray: (v: readonly T[][]) => C,
) => Mixin2<SinkLike<T>, TSink, number> = <
  C extends ReactiveContainerLike<TSink>,
  TSink extends SinkLike<readonly T[]>,
  T,
>(
  fromReadonlyArray: (v: readonly T[][]) => C,
) => {
  const BufferSinkMixin_maxBufferSize = Symbol("BufferSinkMixin_maxBufferSize");
  const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");

  type TProperties = {
    readonly [BufferSinkMixin_maxBufferSize]: number;
    [BufferSinkMixin_buffer]: T[];
  };

  return mix(
    include(Disposable_mixin, delegatingMixin()),
    function BufferSinkMixin(
      instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
        Mutable<TProperties>,
      delegate: TSink,
      maxBufferSize: number,
    ): SinkLike<T> {
      init(Disposable_mixin, instance);
      init(delegatingMixin<TSink>(), instance, delegate);

      instance[BufferSinkMixin_maxBufferSize] = maxBufferSize;
      instance[BufferSinkMixin_buffer] = [];

      pipe(
        instance,
        Disposable_addTo(delegate),
        Disposable_onComplete(() => {
          const { [BufferSinkMixin_buffer]: buffer } = instance;
          instance[BufferSinkMixin_buffer] = [];

          if (isEmpty(buffer)) {
            pipe(instance[DelegatingLike_delegate], Disposable_dispose());
          } else {
            pipe(
              [buffer],
              fromReadonlyArray,
              ReactiveContainer_sinkInto<C, TSink, readonly T[]>(
                instance[DelegatingLike_delegate],
              ),
            );
          }
        }),
      );

      return instance;
    },
    props<TProperties>({
      [BufferSinkMixin_maxBufferSize]: 0,
      [BufferSinkMixin_buffer]: none,
    }),
    {
      [SinkLike_notify](this: TProperties & DelegatingLike<TSink>, next: T) {
        const {
          [BufferSinkMixin_buffer]: buffer,
          [BufferSinkMixin_maxBufferSize]: maxBufferSize,
        } = this;

        buffer.push(next);

        if (getLength(buffer) === maxBufferSize) {
          const buffer = this[BufferSinkMixin_buffer];
          this[BufferSinkMixin_buffer] = [];

          this[DelegatingLike_delegate][SinkLike_notify](buffer);
        }
      },
    },
  );
};

export default Sink_bufferMixin;
