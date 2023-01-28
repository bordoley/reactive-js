import {
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { none, pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import { DisposableLike } from "../../../util";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingSinkLike_delegate } from "../rx.internal";

const Sink_takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
  /*@__PURE__*/ (<T>() => {
    const TakeFirstSinkMixin_takeCount = Symbol("TakeFirstSinkMixin_takeCount");
    const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");

    type TProperties = {
      readonly [DelegatingSinkLike_delegate]: SinkLike<T>;
      readonly [TakeFirstSinkMixin_takeCount]: number;
      [TakeFirstSinkMixin_count]: number;
    };

    return returns(
      mix(
        include(Disposable_delegatingMixin),
        function TakeFirstSinkMixin(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          takeCount: number,
        ): SinkLike<T> {
          init(Disposable_delegatingMixin, instance, delegate);

          instance[DelegatingSinkLike_delegate] = delegate;
          instance[TakeFirstSinkMixin_takeCount] = takeCount;

          if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
          }

          return instance;
        },
        props<TProperties>({
          [DelegatingSinkLike_delegate]: none,
          [TakeFirstSinkMixin_count]: 0,
          [TakeFirstSinkMixin_takeCount]: 0,
        }),
        {
          [SinkLike_notify](this: TProperties & DisposableLike, next: T) {
            this[TakeFirstSinkMixin_count]++;
            this[DelegatingSinkLike_delegate][SinkLike_notify](next);
            if (
              this[TakeFirstSinkMixin_count] >=
              this[TakeFirstSinkMixin_takeCount]
            ) {
              pipe(this, Disposable_dispose());
            }
          },
        },
      ),
    );
  })();

export default Sink_takeFirstMixin;
