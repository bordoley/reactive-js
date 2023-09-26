import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { SideEffect1, none, pipe, returns } from "../../../functions.js";
import { SinkLike, SinkLike_notify } from "../../../rx.js";
import { DisposableLike_dispose } from "../../../utils.js";
import * as Disposable from "../../../utils/Disposable.js";
import Disposable_mixin from "../../../utils/Disposable/__internal__/Disposable.mixin.js";

const BufferSinkMixin_delegate = Symbol("BufferSinkMixin_delegate");
const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");
const BufferSinkMixin_count = Symbol("BufferingLike_count");

interface TProps<T> {
  [BufferSinkMixin_delegate]: SinkLike<readonly T[]>;
  [BufferSinkMixin_buffer]: T[];
  [BufferSinkMixin_count]: number;
}

const Sink_bufferMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<readonly T[]>,
  number,
  SideEffect1<readonly T[]>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(Disposable_mixin),
      function BufferSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProps<T>,
        delegate: SinkLike<readonly T[]>,
        count: number,
        onComplete: SideEffect1<readonly T[]>,
      ): SinkLike<T> {
        init(Disposable_mixin, instance, delegate);
        instance[BufferSinkMixin_delegate] = delegate;
        instance[BufferSinkMixin_count] = count;
        instance[BufferSinkMixin_buffer] = [];

        pipe(
          instance,
          Disposable.addTo(delegate),
          Disposable.onComplete(() => {
            const { [BufferSinkMixin_buffer]: buffer } = instance;
            instance[BufferSinkMixin_buffer] = [];

            if (buffer.length > 0) {
              onComplete(buffer);
            } else {
              delegate[DisposableLike_dispose]();
            }
          }),
        );

        return instance;
      },
      props<TProps<T>>({
        [BufferSinkMixin_delegate]: none,
        [BufferSinkMixin_buffer]: none,
        [BufferSinkMixin_count]: 0,
      }),
      {
        [SinkLike_notify](this: TProps<T> & SinkLike<T>, next: T) {
          const {
            [BufferSinkMixin_buffer]: buffer,
            [BufferSinkMixin_count]: count,
          } = this;

          buffer.push(next);

          if (buffer.length === count) {
            const buffer = this[BufferSinkMixin_buffer];
            this[BufferSinkMixin_buffer] = [];

            this[BufferSinkMixin_delegate][SinkLike_notify](buffer);
          }
        },
      },
    ),
  ))();

export default Sink_bufferMixin;
