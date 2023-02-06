import {
  DelegatingLike_delegate,
  Mixin2,
  Mutable,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import { pipe, returns } from "../../../functions";
import { SinkLike, SinkLike_notify } from "../../../rx";
import Disposable_delegatingMixin from "../../../util/__internal__/Disposable/Disposable.delegatingMixin";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import { DelegatingDisposableLike } from "../../../util/__internal__/util.internal";

const Sink_takeFirstMixin: <T>() => Mixin2<SinkLike<T>, SinkLike<T>, number> =
  /*@__PURE__*/ (<T>() => {
    const TakeFirstSinkMixin_takeCount = Symbol("TakeFirstSinkMixin_takeCount");
    const TakeFirstSinkMixin_count = Symbol("TakeFirstSinkMixin_count");

    type TProperties = {
      readonly [TakeFirstSinkMixin_takeCount]: number;
      [TakeFirstSinkMixin_count]: number;
    };

    return returns(
      mix(
        include(Disposable_delegatingMixin<SinkLike<T>>()),
        function TakeFirstSinkMixin(
          instance: Pick<SinkLike<T>, typeof SinkLike_notify> &
            Mutable<TProperties>,
          delegate: SinkLike<T>,
          takeCount: number,
        ): SinkLike<T> {
          init(Disposable_delegatingMixin<SinkLike<T>>(), instance, delegate);

          instance[TakeFirstSinkMixin_takeCount] = takeCount;

          if (takeCount === 0) {
            pipe(instance, Disposable_dispose());
          }

          return instance;
        },
        props<TProperties>({
          [TakeFirstSinkMixin_count]: 0,
          [TakeFirstSinkMixin_takeCount]: 0,
        }),
        {
          [SinkLike_notify](
            this: TProperties & DelegatingDisposableLike<SinkLike<T>>,
            next: T,
          ) {
            this[TakeFirstSinkMixin_count]++;
            this[DelegatingLike_delegate][SinkLike_notify](next);
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
