import Delegating_mixin from "../../Delegating/__internal__/Delegating.mixin.js";
import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_mixin from "../../Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../Disposable/__internal__/Disposable.onComplete.js";
import ReadonlyArray_isEmpty from "../../ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import {
  Mixin3,
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
import { SideEffect1, none, pipe, returns } from "../../functions.js";
import {
  DisposableLike_dispose,
  SinkLike,
  SinkLike_notify,
} from "../../types.js";

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
      include(Disposable_mixin, Delegating_mixin()),
      function ForEachSinkMixin(
        instance: Pick<SinkLike<T>, typeof SinkLike_notify> & BufferingLike<T>,
        delegate: SinkLike<readonly T[]>,
        count: number,
        onComplete: SideEffect1<readonly T[]>,
      ): SinkLike<T> {
        init(Delegating_mixin(), instance, delegate);
        init(Disposable_mixin, instance, delegate);
        instance[BufferingLike_count] = count;
        instance[BufferingLike_buffer] = [];

        pipe(
          instance,
          Disposable_addTo(delegate),
          Disposable_onComplete(() => {
            const { [BufferingLike_buffer]: buffer } = instance;
            instance[BufferingLike_buffer] = [];

            if (ReadonlyArray_isEmpty(buffer)) {
              delegate[DisposableLike_dispose]();
            } else {
              onComplete(buffer);
            }
          }),
        );

        return instance;
      },
      props<BufferingLike<T>>({
        [BufferingLike_buffer]: none,
        [BufferingLike_count]: 0,
      }),
      {
        [SinkLike_notify](
          this: BufferingLike<T> &
            DelegatingLike<SinkLike<readonly T[]>> &
            SinkLike<T>,
          next: T,
        ) {
          const {
            [BufferingLike_buffer]: buffer,
            [BufferingLike_count]: count,
          } = this;

          buffer.push(next);

          if (buffer.length === count) {
            const buffer = this[BufferingLike_buffer];
            this[BufferingLike_buffer] = [];

            this[DelegatingLike_delegate][SinkLike_notify](buffer);
          }
        },
      },
    ),
  ))();

export default Sink_bufferMixin;
