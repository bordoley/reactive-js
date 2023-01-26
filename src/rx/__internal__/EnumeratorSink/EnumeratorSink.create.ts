import {
  Mutable,
  createInstanceFactory,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { getLength, none, pipe } from "../../../functions";
import {
  EnumeratorLike,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  SourceLike_move,
} from "../../../ix";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import { EnumeratorSinkLike } from "../rx.internal";

const EnumeratorSink$create: <T>() => EnumeratorSinkLike<T> = (<T>() => {
  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    readonly buffer: T[];
  };

  return createInstanceFactory(
    mix(
      include(Disposable$mixin),
      function EnumeratorSink(
        instance: Pick<
          SinkLike<T> & EnumeratorLike<T>,
          typeof SinkLike_notify | typeof SourceLike_move
        > &
          Mutable<TProperties>,
      ): EnumeratorLike<T> & SinkLike<T> {
        init(Disposable$mixin, instance);

        instance.buffer = [];

        pipe(
          instance,
          Disposable$onDisposed(() => {
            instance.buffer.length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
          }),
        );

        return instance;
      },
      props<TProperties>({
        buffer: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        [SinkLike_notify](this: DisposableLike & TProperties, next: T) {
          if (Disposable$isDisposed(this)) {
            return;
          }
          this.buffer.push(next);
        },
        [SourceLike_move](this: DisposableLike & TProperties) {
          const { buffer } = this;

          if (!Disposable$isDisposed(this) && getLength(buffer) > 0) {
            const next = buffer.shift() as T;
            this[EnumeratorLike_current] = next;
            this[EnumeratorLike_hasCurrent] = true;
          } else {
            this[EnumeratorLike_hasCurrent] = false;
          }
        },
      },
    ),
  );
})();

export default EnumeratorSink$create;
