import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import {
  Mixin3,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import { Optional, SideEffect1, none, pipe, returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DisposableMixin from "./DisposableMixin.js";

const BufferSinkMixin_delegate = Symbol("BufferSinkMixin_delegate");
const BufferSinkMixin_buffer = Symbol("BufferSinkMixin_buffer");
const BufferSinkMixin_count = Symbol("BufferingLike_count");

interface TProps<T> {
  [BufferSinkMixin_delegate]: SinkLike<readonly T[]>;
  [BufferSinkMixin_buffer]: T[];
  [BufferSinkMixin_count]: number;
}

const BufferSinkMixin: <T>() => Mixin3<
  SinkLike<T>,
  SinkLike<readonly T[]>,
  number,
  SideEffect1<readonly T[]>,
  unknown,
  Pick<SinkLike<T>, typeof SinkLike_notify>
> = /*@__PURE__*/ (<T>() =>
  returns(
    mix(
      include(DisposableMixin),
      function BufferSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & TProps<T>,
        delegate: SinkLike<readonly T[]>,
        count: Optional<number>,
        onComplete: SideEffect1<readonly T[]>,
      ): SinkLike<T> {
        init(DisposableMixin, instance, delegate);
        instance[BufferSinkMixin_delegate] = delegate;
        instance[BufferSinkMixin_count] = clampPositiveNonZeroInteger(
          count ?? MAX_SAFE_INTEGER,
        );
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

export default BufferSinkMixin;
