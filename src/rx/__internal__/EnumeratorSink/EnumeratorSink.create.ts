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
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed";
import { EnumeratorSinkLike } from "../rx.internal";

const EnumeratorSink_buffer = Symbol("EnumeratorSink_buffer");

const EnumeratorSink_create: <T>() => EnumeratorSinkLike<T> = (<T>() => {
  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    readonly [EnumeratorSink_buffer]: T[];
  };

  return createInstanceFactory(
    mix(
      include(Disposable_mixin),
      function EnumeratorSink(
        instance: Pick<
          SinkLike<T> & EnumeratorLike<T>,
          typeof SinkLike_notify | typeof SourceLike_move
        > &
          Mutable<TProperties>,
      ): EnumeratorLike<T> & SinkLike<T> {
        init(Disposable_mixin, instance);

        instance[EnumeratorSink_buffer] = [];

        pipe(
          instance,
          Disposable_onDisposed(() => {
            instance[EnumeratorSink_buffer].length = 0;
            instance[EnumeratorLike_hasCurrent] = false;
          }),
        );

        return instance;
      },
      props<TProperties>({
        [EnumeratorSink_buffer]: none,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
      }),
      {
        [SinkLike_notify](this: DisposableLike & TProperties, next: T) {
          if (Disposable_isDisposed(this)) {
            return;
          }
          this[EnumeratorSink_buffer].push(next);
        },
        [SourceLike_move](this: DisposableLike & TProperties) {
          const { [EnumeratorSink_buffer]: buffer } = this;

          if (!Disposable_isDisposed(this) && getLength(buffer) > 0) {
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

export default EnumeratorSink_create;
